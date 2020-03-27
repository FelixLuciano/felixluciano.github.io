<template lang="pug">

  span
    icon-quote-open(class='inline' fill='currentColor')

    span {{ typedText }}
    span(class='blinking-cursor' v-if='showBlinkingCursor') _

    icon-quote-close(class='inline' fill='currentColor')

</template>

<script>

import quoteOpenIcon from 'icons/format-quote-open'
import quoteCloseIcon from 'icons/format-quote-close'

export default {
  name: 'greetings',

  data () {
    return {
      typedText: '...',
      showBlinkingCursor: false
    }
  },

  methods: {
    setText (text) {
      this.typedText = text
    },

    pushCharacter (character) {
      this.typedText += character
    },

    wait (time) {
      return new Promise(resolve => {
        setTimeout(resolve, time)
      })
    },

    typeCharacter (character) {
      return new Promise(resolve => {
        const randomMsInterval = 100 * Math.random()
        const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval

        this.pushCharacter(character)
        this.wait(msInterval).then(resolve)
      })
    },

    typeText (text) {
      return new Promise(resolve => {
        const type = index => {
          this.typeCharacter(text[index]).then(() => {
            if (index + 1 < text.length) type(index + 1)
            else resolve()
          })
        }
        type(0)
      })
    },

    typeGreetings () {
      return new Promise(resolve => {
        this.typeText('Hello')

          .then(() => {
            return this.wait(500)
          })

          .then(() => {
            return this.typeText(', i am Luciano')
          })

          .then(() => {
            return this.wait(750)
          })

          .then(() => {
            return this.typeText(' and on this page you can know more about me')
          })

          .then(() => {
            return this.wait(1000)
          })

          .then(() => {
            return this.typeText(' and my creations')
          })

          .then(() => {
            this.setText('Hello, i am Luciano and on this page you can know more about me and my creations')
            return this.wait(1000)
          })

          .then(resolve)
      })
    }
  },

  mounted () {
    this.$emit('typingStarted')

    this.wait(1000)

      .then(() => {
        this.setText('')
        this.showBlinkingCursor = true

        return this.wait(1000)
      })

      .then(() => {
        return this.typeGreetings()
      })

      .then(() => {
        this.$emit('typingEnded')

        return this.wait(1000)
      })

      .then(() => {
        this.showBlinkingCursor = false
      })
  },

  components: {
    'icon-quote-open': quoteOpenIcon,
    'icon-quote-close': quoteCloseIcon
  }
}

</script>

<style lang='postcss' scoped>

.blinking-cursor
  animation: blink 750ms steps(2, start) infinite

@keyframes blink
  to
    visibility: hidden

</style>
