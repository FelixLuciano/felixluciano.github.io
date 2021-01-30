<template lang="pug">

content-section#About-me(class="max-w-screen-md")
  template(v-slot:title)
    | WHO I AM
  
  article#letters(class="md:text-lg")
    letters

</template>
<script setup>

import contentSection from "./section.vue"
import { VueComponent as letters } from "../static/docs/about-me.md"

</script>
<style lang="postcss">

#letters
  @apply leading-8 !important

  img:first-child
    @apply mb-8

  p
    @apply mb-2

  a
    @apply underline

</style>
