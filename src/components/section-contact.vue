<template lang="pug">

content-section#Contact(class="max-w-screen-md")
  template(v-slot:title)
    | SEND ME A MESSAGE

  form(
    class="p-0"
    :action="form.apiUrl"
    method="post"
    target="_blank"
    @submit.prevent="submit"
    v-show="!info.display"
  )
    input(
      class="block w-full p-3 bg-white dark:bg-gray-200 dark:text-dark disabled:opacity-50"
      type="text"
      name="contact"
      placeholder="Your contact"
      required="true"
      v-model="form.contact"
      :disabled="form.disabled"
    )
    autosizing-textarea(
      class="relative block w-full p-3 pb-12 mt-2 leading-relaxed bg-white appearance-none min-h-32 dark:bg-gray-200 dark:text-dark disabled:opacity-50"
      name="message"
      placeholder="Hey, Luciano!\n\nI am..."
      required="true"
      v-model="form.message"
      :disabled="form.disabled"
    )
    input(
      class="block mt-2 ml-2 text-lg underline bg-transparent cursor-pointer "
      type="submit"
      value="Send"
      :disabled="form.disabled"
    )

  section(
    class="text-center"
    v-show="info.display"
  )
    strong(
      class="text-2xl"
      v-text="info.message.title"
    )
    br
    span(
      class="text-lg"
      v-text="info.message.text"
    )
    br
    br
    a(
      class="underline"
      href="#Contact"
      @click="info.display=false"
      v-text="info.message.action"
    )

</template>
<script setup>

import { reactive, computed } from "vue"
import contentSection from "./section.vue"
import autosizingTextarea from "./autosizing-textarea.vue"

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
