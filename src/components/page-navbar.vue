<template lang="pug">

  nav(class='flex items-center')

    article(class='inline-flex items-center pl-2 sm:pl-3')
      a(class='text-sm md:text-lg hover:underline' href='#Who_i_am' title='Scroll page down')
        | About me
        icon-arrow-down(class='inline fill-current')

    div(class='flex-grow')

    article(class='flex sm:pr-2')
      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.instagram' title='Open my Instagram profile page' target='_blank' rel='noopener noreferrer')
          icon-instagram(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.codepen' title='Open my Codepen profile page' target='_blank' rel='noopener noreferrer')
          icon-codepen(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1")
        a(class='contact-button--content' :href='links.github' title='Open my Github profile page' target='_blank' rel='noopener noreferrer')
          icon-github(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

      button(class='contact-button' tabindex="-1" @click='focusContactForm')
        a(class='contact-button--content' href='#Send-me-a-message' title='Send me an email')
          icon-email(class='w-5 h-5 fill-current sm:w-6 sm:h-6')

</template>

<script>

import arrowDownIcon from 'icons/chevron-down'
import instagramIcon from 'icons/instagram'
import codepenIcon from 'icons/codepen'
import githubIcon from 'icons/github-circle'
import emailIcon from 'icons/email-outline'

export default {
  name: 'page-navbar',

  data () {
    return {
      links: {
        instagram: 'https://instagram.com/felix.lucianodias',
        codepen: 'https://codepen.io/FelixLuciano',
        github: 'https://github.com/FelixLuciano'
      }
    }
  },

  methods: {
    focusContactForm () {
      this.$root.$emit('focusMessageForm')
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
  @apply bg-dark border border-solid border-dark transition-all duration-200 rounded-full

  &:hover
    @apply bg-gray-2 border-gray-3

.contact-button--content
  @apply p-3 block

</style>
