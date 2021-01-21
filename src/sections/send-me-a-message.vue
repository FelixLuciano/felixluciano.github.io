<template lang="pug">

pageSection#Send-me-a-message.max-w-screen-md
  template(v-slot:title) SEND ME A MESSAGE

  form.p-0(:action="form.apiUrl" method="post" target="_blank" @submit.prevent="submit" v-show="!info.display")
    input.w-full.p-3.bg-white.disabled_opacity-50(type="text" name="contact" placeholder="Your contact" required="true" v-model="form.contact" :disabled="form.disabled")
    br
    autosizing-textarea.appearance-none.relative.w-full.min-h-32.p-3.mt-2.bg-white.disabled_opacity-50.leading-relaxed(name="message" placeholder="Hey, Luciano!\n\nI am..." required="true" v-model="form.message" :disabled="form.disabled")
    br
    input.ml-3.mt-2.text-lg.underlinebg-transparent.hover_underline.cursor-pointer(type="submit" value="Send" :disabled="form.disabled")

  section.text-center(v-show="info.display")
    strong.text-2xl {{ info.message.title }}
    br
    span.text-lg {{ info.message.text }}
    br
    br
    a.underline(href="#Contact" @click="info.display=false") {{ info.message.action }}

</template>
<script setup>

import { reactive, computed } from "vue"
import pageSection from "../components/page-section.vue"
import autosizingTextarea from "../components/autosizing-textarea.vue"

const form = reactive({
  apiUrl: "https://app.lucianofelix.com.br/send-message/",
  contact: "",
  message: "",
  disabled: false,
})

const info = reactive({
  display: false,
  message: {
    title: "",
    text: "",
    action: ""
  }
})

const request = computed(() => {
  return {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      contact: form.contact,
      message: form.message
    })
  }
})

function displayInfo ({ title, message, action }) {
  info.display = true
  info.message.title = title
  info.message.text = message
  info.message.action = action
}

async function submit() {
  form.disabled = true

  try {
    const response = await fetch(form.apiUrl, request.value)

    if (response.status === 200) {
      displayInfo({
        title: "Done!",
        message: "Your message has been sent, and I will respond as soon as I can.",
        action: "Send another message"
      })
      form.contact = ""
      form.message = ""
    }
  }
  catch (err) {
    displayInfo({
      title: "Error!",
      message: "Something went wrong and your message could not be sent.",
      action: "Try again"
    })
    console.error(err)
  }
  finally {
    form.disabled = false
  }
}

</script>
<style lang="postcss" scoped>

textarea, input[type="text"]
  &::placeholder
    @apply text-gray-600

</style>
