<template lang="pug">

content-section#Programming(class="max-w-screen-lg")
  template(v-slot:title)
    | PROGRAMMING

  section(class="grid grid-cols-2 gap-1 md_gap-3")
    post-card(
      class="col-span-2"
      :data-post="posts.featured"
    )

    template(v-for="post in posts.galery")
      post-card(:data-post="post")

  template(v-slot:footer)
    | See more pens on
    |
    a(
      class="underline"
      href="https://codepen.io/FelixLuciano"
      target="_blank"
      rel="noopener noreferrer"
    )
      | my Codepen
    |
    | and projects on
    |
    a(
      class="underline"
      href="https://github.com/FelixLuciano"
      target="_blank"
      rel="noopener noreferrer"
    )
      | my Github
    | .

</template>
<script setup>

import contentSection from "./section.vue"
import postCard from "./post-card.vue"
import posts from "../static/posts/programming.yml"

</script>
