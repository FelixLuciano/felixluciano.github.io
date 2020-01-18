<template lang="pug">

  page-section#Programming
    template(slot='title') PROGRAMMING

    section(class='flex flex-row flex-wrap w-full children:p-1 sm:children:p-2')
      article(class='w-full')
        publication-card(class='w-full' :data-post='posts.featured')

      template(v-for='post in posts.galery')
        article(class='w-1/2')
          publication-card(class='w-full' :data-post='post')

    template(slot='footer')
      | See more pens on
      |
      a(class='underline' href='https://codepen.io/FelixLuciano') my Codepen
      |
      | and projects on
      |
      a(class='underline' href='https://github.com/FelixLuciano') my Github
      | .

</template>

<script>

import pageSection from '@/components/page-section.vue'
import publicationCard from '@/components/publication-card.vue'
import posts from '@/assets/programming/index.yml'

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
