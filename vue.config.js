module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    console.log({ config })
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
  }
}
