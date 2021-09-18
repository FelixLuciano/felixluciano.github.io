<template lang="pug">

span
  quote-open-icon(class="inline fill-current")

  span(v-text="text")
  span#typing-cursor(v-if="showCursor")
    | _

  quote-open-icon(class="inline transform rotate-180 fill-current")

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
    const getRandomTick = () => {
        const randomMs = 100 * Math.random()
        return randomMs < 50 ? 10 : randomMs
    }

    async function type (input) {
      for (let character of input) {
        text.value += character
        await sleep(getRandomTick())
      }
    }
    async function erase (input) {
      for (let character of input) {
        text.value = text.value.slice(0, text.value.length -1)
        await sleep(getRandomTick())
      }
    }

    async function init() {
      context.emit("typingStarted")
      await sleep(800)
      text.value = ""
      showCursor.value = true
      await sleep(800)
      await type("Hello")
      await sleep(500)
      await type(", I'm")
      await sleep(100)
      await erase("'m")
      await type(" am Luciano")
      await sleep(750)
      await type(" and on this page you will")
      await sleep(100)
      await erase("will")
      await type(" can know more about me")
      await sleep(750)
      await type(" and my creations")
      await sleep(800)
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
