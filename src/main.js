// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import  './assets/styles/iconfont.css'
import  'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  store,
  components: { App }, //在项目中使用了一个局部组件app
  template: '<App/>'   //指的就是App.vue中的内容
});
//路由就是根据地址的不同，返回不同的内容给客户
