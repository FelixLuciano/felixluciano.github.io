<template lang="pug">

span
  quoteOpenIcon.inline.fill-current

  span(v-text="text")
  span#typing-cursor(v-if="showCursor") _

  quoteOpenIcon.inline.fill-current.transform.rotate-180

</template>
<script>

import { ref } from "vue"

import quoteOpenIcon from "@icons/format-quote-open.svg"

export default {
  emits: ["typingStarted", "typingEnded"],
  components: {
    quoteOpenIcon
  },
  setup(props, context) {
    const text = ref("...")
    const showCursor = ref(false)

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    async function type (input) {
      for (let character of input) {  
        const randomMs = 100 * Math.random()
        const interval = randomMs < 50 ? 10 : randomMs
        text.value += character
        await sleep(interval)
      }
    }

    async function init() {
      context.emit("typingStarted")
      await sleep(1000)
      text.value = ""
      showCursor.value = true
      await sleep(1000)
      await type("Hello")
      await sleep(500)
      await type(", i am Luciano")
      await sleep(750)
      await type(" and on this page you can know more about me")
      await sleep(1000)
      await type(" and my creations")
      await sleep(1000)
      context.emit("typingEnded")
      await sleep(1000)
      showCursor.value = false
    }

    init()

    return {
      text,
      showCursor
    }
  }
}

</script>
<style lang="postcss" scoped>

#typing-cursor
  animation: blink 750ms steps(2, start) infinite

@keyframes blink
  to
    visibility: hidden

</style>
