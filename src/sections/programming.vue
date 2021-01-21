<template lang="pug">

page-section#Programming.max-w-screen-lg
  template(v-slot:title) PROGRAMMING

  section.grid.grid-cols-2.gap-1.md_gap-3
    publication-card.col-span-2(:data-post="posts.featured")

    template(v-for="post in posts.galery")
      publication-card(:data-post="post")

  template(v-slot:footer)
    | See more pens on
    |
    a.underline(href="https://codepen.io/FelixLuciano" target="_blank" rel="noopener noreferrer") my Codepen
    |
    | and projects on
    |
    a.underline(href="https://github.com/FelixLuciano" target="_blank" rel="noopener noreferrer") my Github
    | .

</template>
<script setup>

import pageSection from "../components/page-section.vue"
import publicationCard from "../components/publication-card.vue"
import posts from "../assets/sections/programming.yml"

</script>
