<template lang="pug">

  figure
    a(:href='dataPost.url' v-if='!zoomSource && dataPost.url' title='Check out this publication')
      img(:src='thumbSource' :alt='dataPost.alt')

    img(:src='thumbSource' :data-zoom-src='zoomSource' :alt='dataPost.alt' v-else)

    figcaption(class='mt-2')
      strong
        a(class='underline' :href='dataPost.url' v-if='dataPost.url') {{ this.dataPost.title }}
        template(v-else) {{ this.dataPost.title }}

      template(v-if='dataPost.date')
        |
        | - {{ dataPost.date }}

      p(v-if='dataPost.description') {{ dataPost.description }}

</template>

<script>

import MediumZoom from 'medium-zoom'

export default {
  name: 'publication-card',

  props: {
    dataPost: {
      type: Object,
      required: true
    }
  },

  computed: {
    thumbSource () {
      return require(`@/assets/${this.dataPost.source}`)
    },

    zoomSource () {
      if (this.dataPost.zoomSource) return require(`@/assets/${this.dataPost.zoomSource}`)
      else return false
    }
  },

  methods: {
    setupZoom () {
      const imageNode = this.$vnode.elm.querySelector('img')

      MediumZoom(imageNode, {
        background: '#EEE'
      })
    }
  },

  mounted () {
    if (this.dataPost.zoomSource) this.setupZoom()
  }
}

</script>
