<template lang="pug">

  page-section#Photography
    template(slot='title') PHOTOGRAPHY

    section(class='flex flex-row flex-wrap w-full children:p-1 sm:children:p-2')
      article(class='w-full')
        publication-card(class='w-full' :data-post='posts.featured')

      template(v-for='post in posts.galery')
        article(class='w-1/2')
          publication-card(class='w-full' :data-post='post')

    template(slot='footer')
      | Click to magnify. See more photos on
      |
      a(class='underline' href='https://instagram.com/felix.lucianodias' title='Open my Instagram profile page') my Instagram
      | .

</template>

<script>

import pageSection from '@/components/page-section.vue'
import publicationCard from '@/components/publication-card.vue'
import posts from '@/assets/photography/index.yml'

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
