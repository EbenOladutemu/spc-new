/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Cheeksy from 'vue-router'
import { routes } from "./routes";
import Styles from "./assets/css/style.css"
import Spc from "./assets/css/spc.css"
import Intro from './components/blocks/Intro'
import Nav from './components/blocks/Nav'

Vue.component('app-intro', Intro)
Vue.component('app-nav', Nav)

Vue.use(Cheeksy);
Vue.use(Styles);
Vue.use(Spc);

const router = new Cheeksy({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
