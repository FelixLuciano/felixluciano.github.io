<template lang="pug">

pageHeader
sectionWhoIAm
sectionPhotograpy
sectionPrograming
sectionSendMeAMessage
pageFooter

</template>
<script setup>

import pageHeader from "./sections/page-header.vue"
import sectionWhoIAm from "./sections/who-i-am.vue"
import sectionPhotograpy from "./sections/photography.vue"
import sectionPrograming from "./sections/programming.vue"
import sectionSendMeAMessage from "./sections/send-me-a-message.vue"
import pageFooter from "./sections/page-footer.vue"

</script>
<style lang="postcss">

html
    scroll-behavior: smooth

body
    @apply bg-light text-dark font-sans

::selection
    @apply bg-gray-300

#app
    @apply w-full h-full absolute

</style>