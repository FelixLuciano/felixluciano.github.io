<template lang="pug">

  page-section#Photography
    template(slot='title') PHOTOGRAPHY

    section(class='grid grid-cols-2 gap-1 md:gap-3')
      publication-card(class='col-span-2' :data-post='posts.featured')

      template(v-for='post in posts.galery')
        publication-card(:data-post='post')

    template(slot='footer')
      | Click to magnify. See more photos on
      |
      a(class='underline' href='https://instagram.com/felix.lucianodias' title='Open my Instagram profile page' target='_blank' rel='noopener noreferrer') my Instagram
      | .

</template>

<script>

import pageSection from '@/components/page-section.vue'
import publicationCard from '@/components/publication-card.vue'
import posts from '@/assets/sections/photography.yml'

export default {
  name: 'section-photography',

  data () {
    return {
      posts
    }
  },

  components: {
    'page-section': pageSection,
    'publication-card': publicationCard
  }
}

</script>

<style lang='postcss'>

  .medium-zoom-image--opened
    pointer-events: none

</style>
