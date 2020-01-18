<template lang="pug">

  page-section#Who_i_am(max-width='750px')
    template(slot='title') WHO I AM

    article(class='pb-3')
      img#profile-photo(class='w-full' src='@/assets/me/profile-photo.jpg' alt='Profile photo')

    article(class='flex pt-8 no-wrap')
      letters

</template>

<script>

import pageSection from '@/components/page-section.vue'
import letters from '@/components/letters.vue'

export default {
  name: 'section-who-i-am',

  components: {
    'page-section': pageSection,
    'letters': letters
  }
}

</script>
