<template lang="pug">

  section(class='container px-1 pt-6 mx-auto md:px-2' :style='{maxWidth}')

    article(class='w-full px-4 py-12 text-center md:py-16' v-if='$slots.title')
      strong(class='text-3xl md:text-4xl')
        slot(name='title')

    slot

    article(class='w-full pt-8 text-center' v-if='$slots.footer')
      slot(name='footer')

</template>

<script>

export default {
  name: 'page-section',

  props: {
    maxWidth: {
      type: String,
      default: '1000px'
    }
  }
}

</script>
