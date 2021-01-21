<template lang="pug">

pageSection#Photography.max-w-screen-lg
  template(v-slot:title) PHOTOGRAPHY

  section.grid.grid-cols-2.gap-1.md_gap-3
    publicationCard.col-span-2(:data-post="posts.featured")

    template(v-for="post in posts.galery")
      publication-card(:data-post="post")

  template(v-slot:footer)
    | Click to magnify. See more photos on
    |
    a.underline(href="https://instagram.com/felix.lucianodias" title="Open my Instagram profile page" target="_blank" rel="noopener noreferrer") my Instagram
    | .

</template>
<script setup>

import pageSection from "../components/page-section.vue"
import publicationCard from "../components/publication-card.vue"
import posts from "../assets/sections/photography.yml"

</script>
<style lang="postcss">

.medium-zoom-image--opened
  pointer-events: none

</style>
