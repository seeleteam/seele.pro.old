// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueI18n from 'vue-i18n'
import en from '@/lang/en/index.json'
import cn from '@/lang/cn/index.json'
import cookie from '@/utils/cookie'
window.cookie=cookie
Vue.use(VueI18n)

Vue.prototype.$ajax = axios
//0-19
Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBh56PJUi3x3Q_oEFy7PnRquPjIVGsbZUs',
    libraries: 'places',
    language: 'en-us',
  }
})
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

let lang = "en"
if(cookie.get('lang')){
  lang = cookie.get('lang')
}
const i18n = new VueI18n({
  locale : lang,
  messages:{
    en,cn
  }
})
/* eslint-disable no-new */
window.app = new Vue({
  router,
  i18n,
  components: { App },
  template: '<App/>',
  methods:{
    switchLang(lang){
      this.$i18n.locale = lang
      // VueGoogleMaps.load.language = 'zh-cn'
    }
  }
}).$mount('#app')
