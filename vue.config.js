const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  ctest: /\.svg$/,
  loader: 'vue-svg-sprite-loader',
  options: {
    // Removes svg title, default is false when not passing any options
    removeTitle: true
  }
})
