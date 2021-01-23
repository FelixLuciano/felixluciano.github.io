<template lang="pug">

content-section#Photography.max-w-screen-lg
  template(v-slot:title) PHOTOGRAPHY

  section.grid.grid-cols-2.gap-1.md_gap-3
    post-card.col-span-2(:data-post="posts.featured")

    template(v-for="post in posts.galery")
      post-card(:data-post="post")

  template(v-slot:footer)
    | Click to magnify. See more photos on
    |
    a.underline(href="https://instagram.com/felix.lucianodias" title="Open my Instagram profile page" target="_blank" rel="noopener noreferrer") my Instagram
    | .

</template>
<script setup>

import contentSection from "./section.vue"
import postCard from "./post-card.vue"
import posts from "../static/posts/photography.yml"

</script>
<style lang="postcss">

.medium-zoom-image--opened
  pointer-events: none

</style>
