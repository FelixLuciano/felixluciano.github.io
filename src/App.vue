<template lang='pug'>

  #app
    page-header

    main
      section-who-i-am
      section-photography
      section-programming
      section-contact

    page-footer

</template>

<script>

import PageHeader from '@/components/page-header.vue'
import sectionWhoIAm from '@/components/section-who-i-am.vue'
import sectionPhotography from '@/components/section-photography.vue'
import sectionProgramming from '@/components/section-programming.vue'
import sectionContact from '@/components/section-contact.vue'
import pageFooter from '@/components/page-footer.vue'

export default
{
  name: 'App',

  components:
  {
    'page-header': PageHeader,
    'section-who-i-am': sectionWhoIAm,
    'section-photography': sectionPhotography,
    'section-programming': sectionProgramming,
    'section-contact': sectionContact,
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
