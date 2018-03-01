// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import FastClick from 'fastclick';

import store from './store/';

import router from './router/';

import App from './App';

import VueLazyload from 'vue-lazyload'

import { AlertPlugin, ToastPlugin } from 'vux';

import  { LoadingPlugin } from 'vux';

import $ from 'zepto';

import 'swiper/dist/css/swiper.min.css';

import 'vue-transition.css'

import './assets/js/phone';

import 'github-markdown-css';

import 'font-awesome/css/font-awesome.min.css';

Vue.use(AlertPlugin);

Vue.use(ToastPlugin);

Vue.use(LoadingPlugin);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/timg%20(1).gif',
  loading: '../static/img/timg.gif',
  attempt: 1
});
FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');
