<template lang="pug">

footer#page-footer(class="flex flex-wrap items-center px-4 pt-16 pb-4")
  article(class="w-full text-center")
    logoLight(
      class="inline-block w-16"
      v-if="$root.isDark"
    )
    logoDark(
      class="inline-block w-16"
      v-else
    )

  article(class="w-full py-8 text-center")
    strong
      | &copy; 2021 LUCIANO FELIX - All rights reserved

</template>

<script setup>

import logoDark from "../static/svg/logo-dark.svg"
import logoLight from "../static/svg/logo-light.svg"

</script>
