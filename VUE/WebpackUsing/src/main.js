
// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

document.writeln('<h2>欢迎啊</h2>')

import Vue from 'vue'
import App from './vue/App'


new Vue({
  el:'#app',
  template:'<App/>',  // 使用App，不需要在html文件中加入
  components:{
    App       // 注册App
  },
})