import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/scss/index.scss';
import 'babel-polyfill';
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css'
//引入swiper 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
//消除300毫秒延迟插件
import fastclick from 'fastclick';
//引入懒加载插件
import VueLazyload from 'vue-lazyload';
//使用懒加载
Vue.use(VueLazyload,{
  loading:'./assets/img/loading.gif',
  error:'data-src'

})
Vue.use(MintUI)
//消除300毫秒延迟
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
