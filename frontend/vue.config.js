const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath:'/yangshop2',  // webpack의 output.publicPath 대신 사용

  outputDir : path.resolve(__dirname, '../backend/public'),
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
})
