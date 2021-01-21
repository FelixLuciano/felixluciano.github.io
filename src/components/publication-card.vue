<template lang="pug">

figure
  a(:href="post.url" v-if="!post.zoomSource && post.url" title="Check out this publication" target="_blank" rel="noopener noreferrer")
    img.w-full(:src="thumb" :alt="post.alt")

  img.w-full(:src="thumb" :data-zoom-src="zoom" :alt="post.alt" v-else)

  figcaption.mt-2
    strong
      a.underline(:href="post.url" v-if="post.url") {{ post.title }}
      template(v-else) {{ post.title }}

    template(v-if="post.date")
      |
      | - {{ post.date }}

    p(v-if="post.description") {{ post.description }}

</template>
<script>

import * as vue from "vue"

import { ref, getCurrentInstance, onMounted } from "vue"
import MediumZoom from "medium-zoom"

export default {
  props: {
    dataPost: {
      type: Object,
      required: true
    }
  },
  setup({ dataPost }, context) {
    const thumb = dataPost.source
    const zoom = dataPost.zoomSource

    if (dataPost.zoomSource) {
      const instance = getCurrentInstance()
      onMounted(() => {
        const imageNode = instance.vnode.el.querySelector("img")
        
        MediumZoom(imageNode, {
          background: "#EEE"
        })
      })
    }

    return {
      post: dataPost,
      thumb,
      zoom
    }
  }
}

</script>
