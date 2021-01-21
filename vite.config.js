import vue from "@vitejs/plugin-vue"
import svg from "../vite-svg-loader"
import nodeResolve from "rollup-plugin-node-resolve"
import markdown from "vite-plugin-markdown"
import yaml from "@rollup/plugin-yaml"

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
