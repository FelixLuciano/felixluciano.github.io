<template lang="pug">

header#page-header.w-full.h-full.p-1.sm_p-4.lg_p-6(style="max-height: 1200px;")
  section.w-full.h-full.p-2.bg-dark.text-white
    div.max-w-screen-2xl.h-full.mx-auto.flex.flex-col(class="w-11/12 md_w-10/12")

      div.flex-grow
      
      logo#page-logo.w-16.h-16

      article.px-2.mt-6.text-justify(class="w-11/12")
        greetings.text-sm.sm_text-xl(@typingStarted="showNavbar = false" @typingEnded="showNavbar = true")

      div.flex-grow

      navbar#page-nav.transition-opacity.duration-300.transition-delay-500(:class="{'opacity-0': !showNavbar}")

</template>
<script setup>

import { ref } from "vue"
import logo from "../static/svg/logo-light.svg"
import greetings from "./greetings.vue"
import navbar from "./navbar.vue"

const showNavbar = ref(false)

</script>
