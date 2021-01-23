<template lang="pug">

content-section#About-me.max-w-screen-md
  template(v-slot:title) WHO I AM

  article
    img#profile-photo(src="/images/profile-photo.webp" alt="Profile photo")

  article#letters.pt-8.md_text-lg.no-wrap
    letters

</template>
<script setup>

import contentSection from "./section.vue"
import { VueComponent as letters } from "../static/docs/letters.md"

</script>
<style lang="postcss">

#letters
  @apply leading-8 !important

  p
    margin-bottom: .6rem

  a
    text-decoration: underline

</style>
