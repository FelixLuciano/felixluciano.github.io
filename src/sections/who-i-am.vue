<template lang="pug">

pageSection#Who_i_am.max-w-screen-md
  template(v-slot:title) WHO I AM

  article
    img#profile-photo.w-full(src="../assets/me/profile-photo.jpg" alt="Profile photo")

  article#letters.pt-8.md_text-lg.no-wrapleading-relaxed
    letters

</template>
<script setup>

import pageSection from "../components/page-section.vue"
import { VueComponent as letters } from "../assets/me/letters.md"

</script>
<style lang="postcss">

#letters
  p
    margin-bottom: .6rem

  a
    text-decoration: underline

</style>
