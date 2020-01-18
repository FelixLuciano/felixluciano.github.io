const Path = require('path')

function resolve (dir) {
  return Path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  indexPath: resolve('index.html'),

  configureWebpack:
  {
    resolve: {
      extensions: ['.js', '.vue', '.svg'],
      alias: {
        icons: resolve('node_modules/@mdi/svg/svg')
      }
    }
  },

  chainWebpack (config) {
    config.module.rule('md')
      .test(/\.md$/)
      .oneOf('vue-loader')
      .resourceQuery(/^\?vue/)
      .use('markdown')
      .loader('markdown-loader')
      .end()
      .end()

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .tap(() => ({
        svgo: {
          plugins: [
            {
              removeViewBox: false
            }
          ]
        }
      }))
  },

  productionSourceMap: false
}
