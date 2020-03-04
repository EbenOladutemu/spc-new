/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Cheeksy from 'vue-router'
import { routes } from "./routes";
import Bootstrap from "./assets/vendor/bootstrap/css/bootstrap.min.css"
import IcoFonts from "./assets/vendor/icofont/icofont.min.css"
import BoxIcons from "./assets/vendor/boxicons/css/boxicons.min.css"
import Animate from "./assets/vendor/animate/animate.min.css"
import Venobox from "./assets/vendor/venobox/venobox.css"
import Styles from "./assets/css/style.css"
import Spc from "./assets/css/spc.css"
import Intro from './components/blocks/Intro'
import Nav from './components/blocks/Nav'

Vue.component('app-intro', Intro)
Vue.component('app-nav', Nav)

Vue.use(Cheeksy);
Vue.use(IcoFonts);
Vue.use(BoxIcons);
Vue.use(Animate);
Vue.use(Venobox);
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
