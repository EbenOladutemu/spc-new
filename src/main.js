/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Cheeksy from 'vue-router'
import { routes } from "./routes";


// Vue.use(Bootstrap);
Vue.use(Cheeksy);

const router = new Cheeksy({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
