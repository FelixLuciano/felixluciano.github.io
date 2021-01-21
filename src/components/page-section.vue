<template lang="pug">

section.container.px-1.pt-6.mx-auto.md_px-2

  article.w-full.px-4_py-12.text-center.md_py-16(v-if="$slots.title")
    strong.text-3xl.md_text-4xl
      slot(name="title")

  slot

  article.w-full.pt-8.text-center(v-if="$slots.footer")
    slot(name="footer")

</template>

<script>

export default {
  props: {
    slots: [ "title", "footer" ],
    maxWidth: {
      type: String,
      default: "1000px"
    }
  }
}

</script>
