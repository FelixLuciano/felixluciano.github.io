<template lang="pug">

  nav(class='flex items-center')

    article(class='inline-flex items-center pl-2 sm:pl-3')
      a(class='text-sm md:text-lg hover:underline' href='#Who_i_am' title='Scroll page down')
        | About me
        icon-arrow-down(class='inline fill-current')

    div(class='flex-grow')

    article(class='flex sm:pr-2')
      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.instagram' title='Open my Instagram profile page')
          icon-instagram(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.codepen' title='Open my Codepen profile page')
          icon-codepen(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.github' title='Open my Github profile page')
          icon-github(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' @click.prevent='mailTo' href='#' title='Send me an email')
          icon-email(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

</template>

<script>

import arrowDownIcon from 'icons/chevron-down'
import instagramIcon from 'icons/instagram'
import codepenIcon from 'icons/codepen'
import githubIcon from 'icons/github-circle'
import emailIcon from 'icons/email'

export default {
  name: 'page-navbar',

  data () {
    return {
      links: {
        instagram: 'https://instagram.com/felix.lucianodias',
        codepen: 'https://codepen.io/FelixLuciano',
        github: 'https://github.com/FelixLuciano',
        mail: 'felix.lucianodias'
      }
    }
  },

  methods: {
    mailTo () {
      window.open(`mailto:${this.links.mail}%40gmail.com`)
    }
  },

  components: {
    'icon-arrow-down': arrowDownIcon,
    'icon-instagram': instagramIcon,
    'icon-codepen': codepenIcon,
    'icon-github': githubIcon,
    'icon-email': emailIcon
  }
}

</script>

<style lang="postcss">

.contact-button
  @apply bg-dark border border-solid border-dark transition-all rounded-full

  &:hover
    @apply bg-gray-2 border-gray-3

.contact-button--content
  @apply p-3 block

</style>
