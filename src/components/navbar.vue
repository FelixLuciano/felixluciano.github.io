<template lang="pug">

nav(class="flex items-center")
  article(class="inline-flex items-center pl-2 sm:pl-3")
    a(
      class="text-sm md:text-lg hover:underline"
      href="#About-me"
      title="Scroll page down"
    )
      | About me
      arrow-down-icon(class="inline fill-current")

  div(class="flex-grow")

  article(class="flex sm:pr-2")
    button(
      class="contact-button"
      tabindex="-1"
    )
      a(
        class="contact-button__content"
        :href="links.instagram"
        title="Open my Instagram profile page"
        target="_blank"
        rel="noopener noreferrer"
      )
        instagram-icon(class="contact-button__icon")

    button(
      class="contact-button"
      tabindex="-1"
    )
      a(
        class="contact-button__content"
        :href="links.codepen"
        title="Open my Codepen profile page"
        target="_blank"
        rel="noopener noreferrer"
      )
        codepen-icon(class="contact-button__icon")

    button(
      class="contact-button"
      tabindex="-1"
    )
      a(
        class="contact-button__content"
        :href="links.github"
        title="Open my Github profile page"
        target="_blank"
        rel="noopener noreferrer"
      )
        github-icon(class="contact-button__icon")

    button(
      class="contact-button"
      tabindex="-1"
    )
      a(
        class="contact-button__content"
        href="#Contact"
        title="Send me a message"
      )
        email-icon(class="contact-button__icon")

</template>
<script setup>

import arrowDownIcon from "@icons/menu-down.svg"
import instagramIcon from "@icons/instagram.svg"
import codepenIcon from "@icons/codepen.svg"
import githubIcon from "@icons/github.svg"
import emailIcon from "@icons/message-text.svg"

const links = {
  instagram: "https://instagram.com/felix.lucianodias",
  codepen: "https://codepen.io/FelixLuciano",
  github: "https://github.com/FelixLuciano",
}

</script>
<style lang="postcss">

@layer components
  .contact-button
    @apply bg-white bg-opacity-0 border border-solid border-white border-opacity-0 rounded-full transition-colors duration-300

    &:hover
      @apply bg-opacity-10 border-opacity-20

  .contact-button__content
    @apply p-3 block

  .contact-button__icon
    @apply w-5 sm:w-6 h-5 sm:h-6 fill-current

</style>
