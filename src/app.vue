<template lang="pug">

page-header
section-about-me
section-photograpy
section-programing
section-contact
page-footer

</template>
<script setup>

import { ref } from "vue"
import pageHeader from "./components/header.vue"
import sectionAboutMe from "./components/section-about-me.vue"
import sectionPhotograpy from "./components/section-photography.vue"
import sectionPrograming from "./components/section-programming.vue"
import sectionContact from "./components/section-contact.vue"
import pageFooter from "./components/footer.vue"

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
const isDark = ref(mediaQuery.matches)

mediaQuery.addEventListener("change", ({ matches }) => {
  isDark.value = matches
})

</script>
<style lang="postcss">

html
  scroll-behavior: smooth

body
  @apply bg-light text-dark dark:bg-gray-700 dark:text-white font-sans

::selection
  @apply bg-gray-300

#app
  @apply w-full h-full absolute

</style>
