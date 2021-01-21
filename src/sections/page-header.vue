<template lang="pug">

header#page-header.w-full.h-full.p-1.sm_p-4.lg_p-6(style="max-height: 1200px;")
  section.w-full.h-full.p-2.text-white.bg-dark
    div.max-w-screen-2xl.h-full.mx-auto.flex.flex-col(class="w-11/12 md_w-10/12")

      div.flex.items-center.flex-grow
        div.w-full

          logo#page-logo.block.w-16.h-16

          article.px-2.mt-6.text-justify(class="w-11/12")
            greetings.text-sm.sm_text-xl(@typingStarted="showNavbar = false" @typingEnded="showNavbar = true")

      page-navbar#page-nav.transition-opacity.duration-300.transition-delay-500(:class="{'opacity-0': !showNavbar}")

</template>
<script setup>

import { ref } from "vue"
import logo from "../assets/branding/logo-light.svg"
import greetings from "../components/greetings.vue"
import pageNavbar from "../components/page-navbar.vue"

const showNavbar = ref(false)

</script>
