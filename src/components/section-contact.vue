<template lang="pug">

  page-section#Contact(max-width='750px')
    template(slot='title') SEND ME A MESSAGE

    form.p-0(:action='apiUrl' method='post' target='_blank' ref='form' @submit='resetForm')

      input(class='w-full p-3' type='email' name='from' placeholder='Your email' required='true' v-model='from')

      br

      textarea(class='w-full h-32 p-3 mt-1 min-h-32' name='message' placeholder='Hey, Luciano!\n\nI am...' required='true' v-model='message')

      br

      input(class='ml-3 text-lg underline cursor-pointer' type='submit')

</template>

<script>

import pageSection from '@/components/page-section.vue'

export default {
  name: 'section-contact',

  data () {
    return {
      apiUrl: 'https://us-central1-felixluciano-github-io.cloudfunctions.net/testing/',
      from: '',
      message: ''
    }
  },

  methods: {
    resetForm () {
      // Live testing code here!!!
      fetch(this.apiUrl, {
        method: 'POST',
        body: {
          from: this.from,
          message: this.message
        }
      }).then(request => {
        console.log(request)

        // Normal code here!!!
        this.$refs.form.reset()
      })
    }
  },

  components: {
    'page-section': pageSection
  }
}

</script>

<style lang='postcss' scoped>

  textarea, input[type='email']
    &::placeholder
      @apply text-gray-4

</style>
