<template lang="pug">

  textarea(:value='value' @input='input')

</template>

<script>

export default {
  name: 'autosizing-textarea',

  props: [ 'value' ],

  methods: {
    input () {
      this.updateSize()
      this.$emit('input', this.$el.value)
    },
    updateSize () {
      this.$el.style.height = 'auto'
      this.$el.style.height = (this.$el.scrollHeight) + 'px'
    }
  },

  mounted () {
    this.updateSize()
  }
}

</script>

<style lang='postcss' scoped>

textarea
  overflow-y: hidden
  resize: none

</style>
