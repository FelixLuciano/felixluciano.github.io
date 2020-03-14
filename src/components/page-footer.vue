<template lang="pug">

  footer#page-footer(class='flex flex-wrap items-center px-4 pt-16 pb-4')

    article(class='w-full text-center')
      logo(class='inline-block' width='64')

    article(class='w-full py-8 text-center')
      strong &copy; 2020 LUCIANO FELIX - All rights reserved

</template>

<script>

import logo from '@/assets/branding/logo-dark.svg'

export default {
  name: 'page-footer',

  components: {
    'logo': logo
  }
}

</script>
