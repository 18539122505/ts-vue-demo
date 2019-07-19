import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/global.less';
// 引入SVG
import SvgIcon from 'vue-svgicon';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(SvgIcon, {
  tagName: 'svg-icon'
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
