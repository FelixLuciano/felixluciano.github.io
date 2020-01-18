<template lang="pug">

  section(class='container py-5 mx-auto' :style='{maxWidth: maxWidth}')

    article(class='w-full py-16 text-center' v-if='$slots.title')
      strong(class='text-4xl')
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
