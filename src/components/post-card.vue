<template lang="pug">

figure
  a(:href="post.url" v-if="!post.zoomSource && post.url" title="Check out this publication" target="_blank" rel="noopener noreferrer")
    img.w-full(:src="post.source" :alt="post.alt")

  img.w-full(:src="post.source" :data-zoom-src="post.zoomSource" :alt="post.alt" v-else)

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

import { getCurrentInstance, onMounted } from "vue"
import MediumZoom from "https://cdnjs.cloudflare.com/ajax/libs/medium-zoom/1.0.6/medium-zoom.esm.min.js"

export default {
  props: {
    dataPost: {
      type: Object,
      required: true
    }
  },
  setup({ dataPost: post }) {
    if (post.zoomSource) {
      const instance = getCurrentInstance()
      onMounted(() => {
        const imageNode = instance.vnode.el.querySelector("img")
        
        MediumZoom(imageNode, {
          background: "#EEE"
        })
      })
    }

    return {
      post
    }
  }
}

</script>
