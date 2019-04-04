import Vue from 'vue'
import './assets/index.css'
// import App from './App.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import './assets/font_class/iconfont.css';




const instance = axios.create({
  baseURL: 'https://apiwx.xiaoweigod.com/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});
Vue.prototype.$axios = instance;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
