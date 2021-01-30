<template lang="pug">

figure
  a(
    :href="post.url"
    v-if="!post.zoomSource && post.url"
    title="Check out this publication"
    target="_blank"
    rel="noopener noreferrer"
  )
    img(
      :src="post.source"
      :alt="post.alt"
    )

  img(
    :src="post.source"
    :data-zoom-src="post.zoomSource"
    :alt="post.alt"
    v-else
  )

  figcaption(class="mt-2")
    strong
      a(
        class="underline"
        :href="post.url"
        v-text="post.title"
        v-if="post.url"
      )
      template(v-else)
        | {{ post.title }}

    template(v-if="post.date")
      |
      | - {{ post.date }}

    p(
      v-text="post.description"
      v-if="post.description"
    )

</template>
<script>

import { getCurrentInstance, onMounted } from "vue"
import MediumZoom from "medium-zoom"

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
          background: false
        })
      })
    }

    return {
      post
    }
  }
}

</script>
<style lang="postcss">

.medium-zoom-overlay
  @apply bg-light dark:bg-gray-700

</style>