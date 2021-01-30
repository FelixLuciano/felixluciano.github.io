<template lang="pug">

header#page-header(
  class="w-full h-full p-1 sm:p-4 lg:p-6"
  style="max-height: 1200px;"
)
  section(class="w-full h-full p-2 text-white bg-dark")
    div(class="flex flex-col w-11/12 h-full mx-auto max-w-screen-2xl md:w-10/12")

      div(class="flex-grow")
      
      logo#page-logo(class="w-16 h-16")

      article(class="w-11/12 px-2 mt-6 text-justify")
        greetings(
          class="text-sm sm:text-xl"
          @typingStarted="showNavbar = false"
          @typingEnded="showNavbar = true"
        )

      div(class="flex-grow")

      navbar#page-nav(
        class="transition-opacity duration-300 transition-delay-500"
        :class="{'opacity-0': !showNavbar}"
      )

</template>
<script setup>

import { ref } from "vue"
import logo from "../static/svg/logo-light.svg"
import greetings from "./greetings.vue"
import navbar from "./navbar.vue"

const showNavbar = ref(false)

</script>
