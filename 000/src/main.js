// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vant from '../node_modules/vant'
import 'vant/lib/index.css'
import Toast from 'vant';
import axios from  "axios"
Vue.use(Toast)
Vue.use(vant)
Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:4040/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
