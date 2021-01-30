<template lang="pug">

nav.flex.items-center

  article.inline-flex.items-center.pl-2.sm_pl-3
    a.text-sm.md_text-lg.hover_underline(href="#About-me" title="Scroll page down")
      | About me
      arrow-down-icon.inline.fill-current

  div.flex-grow

  article.flex.sm_pr-2
    button.contact-button(tabindex="-1")
      a.contact-button--content(:href="links.instagram" title="Open my Instagram profile page" target="_blank" rel="noopener noreferrer")
        instagram-icon.contact-button--icon

    button.contact-button(tabindex="-1")
      a.contact-button--content(href="links.codepen" title="Open my Codepen profile page" target="_blank" rel="noopener noreferrer")
        codepen-icon.contact-button--icon

    button.contact-button(tabindex="-1")
      a.contact-button--content(:href="links.github" title="Open my Github profile page" target="_blank" rel="noopener noreferrer")
        github-icon.contact-button--icon

    button.contact-button(tabindex="-1")
      a.contact-button--content(href="#Contact" title="Send me a message")
        email-icon.contact-button--icon

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
  github: "https://github.com/FelixLuciano"
}

</script>
<style lang="postcss">

@layer components
  .contact-button
    @apply bg-white bg-opacity-0 border border-solid border-white border-opacity-0 rounded-full transition-colors duration-300

    &:hover
      @apply bg-opacity-10 border-opacity-20

  .contact-button--content
    @apply p-3 block

  .contact-button--icon
    @apply w-5 sm_w-6 h-5 sm_h-6 fill-current

</style>
