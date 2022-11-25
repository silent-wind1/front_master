import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {request} from './network/request'
import mavonEditor from 'mavon-editor'


import 'swiper/swiper-bundle.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/mystyle.css'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
// 能否这样导入，这样导入有没有问题？
Vue.use(VueAwesomeSwiper)
Vue.use(Element)
Vue.use(mavonEditor)
new Vue({
  request,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
