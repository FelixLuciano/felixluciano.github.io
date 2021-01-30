import vue from "@vitejs/plugin-vue"
import svg from "vite-svg-loader"
import nodeResolve from "rollup-plugin-node-resolve"
import markdown from "vite-plugin-markdown"
import yaml from "@rollup/plugin-yaml"
import esmImportToUrl from "rollup-plugin-esm-import-to-url"

/**
 * @type {import('vite').UserConfig}
 */
export default {
  server: {
    open: true,
  },
  alias: [
    { find: "@icons", replacement: "@mdi/svg/svg" }
  ],
  plugins: [
    vue(),
    esmImportToUrl({
      imports: {
        "medium-zoom": "https://cdnjs.cloudflare.com/ajax/libs/medium-zoom/1.0.6/medium-zoom.esm.min.js"
      }
    }),
    svg(),
    nodeResolve({
      extensions: [ ".svg" ],
      only: [ "@mdi/svg/svg/*" ]
    }),
    markdown({
      mode: "vue"
    }),
    yaml()
  ]
}
