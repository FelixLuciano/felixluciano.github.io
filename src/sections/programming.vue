<template lang="pug">

  page-section#Programming
    template(slot='title') PROGRAMMING

    section(class='grid grid-cols-2 gap-1 md:gap-3')
      publication-card(class='col-span-2' :data-post='posts.featured')

      template(v-for='post in posts.galery')
          publication-card(:data-post='post')

    template(slot='footer')
      | See more pens on
      |
      a(class='underline' href='https://codepen.io/FelixLuciano' target='_blank' rel='noopener noreferrer') my Codepen
      |
      | and projects on
      |
      a(class='underline' href='https://github.com/FelixLuciano' target='_blank' rel='noopener noreferrer') my Github
      | .

</template>

<script>

import pageSection from '@/components/page-section.vue'
import publicationCard from '@/components/publication-card.vue'
import posts from '@/assets/sections/programming.yml'

export default {
  name: 'section-programming',

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
