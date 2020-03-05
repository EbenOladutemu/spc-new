/* eslint-disable no-unused-vars */
import { routes } from "./routes";

import Vue from 'vue'
import jquery from 'jquery'
import App from './App.vue'
import Cheeksy from 'vue-router'
import Bootstrap from "./assets/vendor/bootstrap/css/bootstrap.min.css"
import IcoFonts from "./assets/vendor/icofont/icofont.min.css"
import BoxIcons from "./assets/vendor/boxicons/css/boxicons.min.css"
import Animate from "./assets/vendor/animate/animate.min.css"
import Venobox from "./assets/vendor/venobox/venobox.css"
// import Venoboxjs from "./assets/vendor/venobox/venobox.js"
import Styles from "./assets/css/style.css"
import Spc from "./assets/css/spc.css"
import Intro from './components/blocks/Intro'
import Nav from './components/blocks/Nav'
import VueTypedJs from 'vue-typed-js'
import VueTypedCss from './../node_modules/vue-typed-js/dist/vue-typed-js.css'



Vue.use(VueTypedJs);
Vue.use(VueTypedCss);
Vue.use(Bootstrap);
// Vue.use(jquery);
Vue.use(Cheeksy);
Vue.use(IcoFonts);
Vue.use(BoxIcons);
Vue.use(Animate);
Vue.use(Venobox);
// Vue.use(Venoboxjs);
Vue.use(Styles);
Vue.use(Spc);
Vue.use(require('vue-moment'));

Vue.component('app-intro', Intro)
Vue.component('app-nav', Nav)


const router = new Cheeksy({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

