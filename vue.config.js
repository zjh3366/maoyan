const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }

      // '/kerwin': {
      //   target: 'https://m.maoyan.com',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/kerwin': ''
      //   }
      // }
    }
  }
})
