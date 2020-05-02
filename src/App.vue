<template lang='pug'>

  #app
    page-header

    main
      section-who-i-am
      section-photography
      section-programming
      section-send-me-a-message

    page-footer

</template>

<script>

import PageHeader from '@/sections/page-header.vue'
import sectionWhoIAm from '@/sections/who-i-am.vue'
import sectionPhotography from '@/sections/photography.vue'
import sectionProgramming from '@/sections/programming.vue'
import sectionSendMeAMessage from '@/sections/send-me-a-message.vue'
import pageFooter from '@/sections/page-footer.vue'

export default
{
  name: 'App',

  components:
  {
    'page-header': PageHeader,
    'section-who-i-am': sectionWhoIAm,
    'section-photography': sectionPhotography,
    'section-programming': sectionProgramming,
    'section-send-me-a-message': sectionSendMeAMessage,
    'page-footer': pageFooter
  }
}

</script>

<style lang='postcss'>

  html
    scroll-behavior: smooth

  body
    @apply bg-light text-dark
    font-family: 'Roboto', sans-serif

  ::selection
    @apply bg-gray-9

  #app
    @apply w-full h-full absolute

</style>
