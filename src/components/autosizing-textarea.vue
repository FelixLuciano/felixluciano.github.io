<template lang="pug">

textarea.overflow-y-hidden.resize-none(:value="modelValue" @input="input")

</template>
<script>

export default {
  props: {
    modelValue: {
      required: false,
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    function updateSize(target) {
      target.style.height = "auto"
      target.style.height = target.scrollHeight + "px"
    }

    function input({target}) {
      updateSize(target)
      emit("update:modelValue", target.value)
    }

    return {
      input
    }
  }
}

</script>
