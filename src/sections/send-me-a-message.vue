<template lang="pug">

  page-section#Send-me-a-message(max-width='750px')
    template(slot='title') SEND ME A MESSAGE

    form.p-0(:action='apiUrl' method='post' target='_blank' @submit.prevent='submit' v-show='!showMessage')

      input(class='w-full p-3 bg-white' type='text' name='contact' placeholder='Your contact' required='true' ref='contact' v-model='contact' :disabled='disabled')

      br

      autosizing-textarea(class='relative w-full p-3 mt-2 leading-relaxed bg-white appearance-none min-h-32' name='message' placeholder='Hey, Luciano!\n\nI am...' required='true' v-model='message' :disabled='disabled')

      br

      input(class='ml-3 text-lg underline bg-transparent cursor-pointer' type='submit' value='send' :disabled='disabled')

    section(class='text-center' v-show='showMessage')
      strong(class='text-2xl') {{ messageDisplays.title }}
      br
      span(class='text-lg') {{ messageDisplays.message }}
      br
      br
      a(class='underline' href='#Contact' @click='showMessage=false') {{ messageDisplays.action }}

</template>

<script>

import pageSection from '@/components/page-section.vue'
import autosizingTextarea from '@/components/autosizing-textarea.vue'

export default {
  name: 'section-send-me-a-message',

  data () {
    return {
      apiUrl: 'https://app.lucianofelix.com.br/send-message/',
      contact: '',
      message: '',
      disabled: false,
      showMessage: false,
      messageDisplays: {
        title: '',
        message: '',
        action: ''
      }
    }
  },

  computed: {
    request () {
      return {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          contact: this.contact,
          message: this.message
        })
      }
    }
  },

  methods: {
    submit () {
      this.disabled = true

      fetch(this.apiUrl, this.request)

        .catch(err => {
          console.error(err)
          this.displayMessage({
            title: 'Error!',
            message: 'Something went wrong and your message could not be sent.',
            action: 'Try again'
          })
          return { status: 400 }
        })

        .then(req => {
          this.disabled = false

          if (req.status) {
            if (req.status >= 200 && req.status < 300) {
              this.displayMessage({
                title: 'Done!',
                message: 'Your message has been sent, and I will respond as soon as I can.',
                action: 'Send another message'
              })

              this.contact = ''
              this.message = ''
            }
          }
        })
    },
    displayMessage ({ title, message, action }) {
      this.showMessage = true

      this.messageDisplays.title = title
      this.messageDisplays.message = message
      this.messageDisplays.action = action
    }
  },

  mounted () {
    this.$root.$on('focusMessageForm', () => this.$refs.contact.focus({ preventScroll: true }))
  },

  components: {
    'page-section': pageSection,
    'autosizing-textarea': autosizingTextarea
  }
}

</script>

<style lang='postcss' scoped>

  textarea, input[type='text']
    &::placeholder
      @apply text-gray-6

</style>
