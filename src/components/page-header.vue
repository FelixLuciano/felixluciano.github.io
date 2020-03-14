<template lang="pug">

  header#page-header(class='w-full h-full p-1 sm:p-4 lg:p-6' style='max-height: 1200px')
    section(class='w-full h-full p-2 text-white bg-dark')
      div(class='flex flex-col h-full mx-auto' style='max-width: 1600px')

        div(class='flex items-center flex-grow')
          div(class='w-full')

            logo#page-logo(class='block' width='64' height='64')

            article(class='w-11/12 px-2 mt-6 text-justify')
              greetings(class='text-sm sm:text-xl' @typingStarted='showNavbar = false' @typingEnded='showNavbar = true')

        page-navbar#page-nav(class='transition-opacity transition-delay-500' :class="{'opacity-0': !showNavbar}")

</template>

<script>

import logo from '@/assets/branding/logo-light.svg'
import greetings from '@/components/greetings'
import pageNavbar from '@/components/page-navbar'

export default {
  name: 'page-header',

  data () {
    return {
      showNavbar: false
    }
  },

  components: {
    'logo': logo,
    'greetings': greetings,
    'page-navbar': pageNavbar
  }
}

</script>
