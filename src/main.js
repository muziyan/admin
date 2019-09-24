import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css"

Vue.use(element);

import "./style.css";

import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine);

import http from "./http";
Vue.prototype.$http = http;

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
