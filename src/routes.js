// import Home from './components/pages/Home'
// import Contact from './components/pages/Contact'
// import Gallery from './components/pages/Gallery'
// import Sermon from './components/pages/Sermon'
// import Donate from './components/pages/Donate'
// import About from './components/pages/church/About.vue'
// import Leadership from './components/pages/church/Leadership'
// import Mission from './components/pages/church/Mission'
// import Vision from './components/pages/church/Vision'
// import WorshipTimes from './components/pages/church/WorshipTimes'

const Home = resolve => { //Loading Routes lazily
  require.ensure(['./components/pages/Home'], () => {
    resolve(require('./components/pages/Home'));
  })
}

const Contact = resolve => {
  require.ensure(['./components/pages/Contact'], () => {
    resolve(require('./components/pages/Contact'));
  })
}

const Gallery = resolve => {
  require.ensure(['./components/pages/Gallery'], () => {
    resolve(require('./components/pages/Gallery'));
  })
}

const Sermon = resolve => {
  require.ensure(['./components/pages/Sermon'], () => {
    resolve(require('./components/pages/Sermon'));
  })
}

const Donate = resolve => {
  require.ensure(['./components/pages/Donate'], () => {
    resolve(require('./components/pages/Donate'));
  })
}

const About = resolve => {
  require.ensure(['./components/pages/church/About'], () => {
    resolve(require('./components/pages/church/About'));
  })
}

const Leadership = resolve => {
  require.ensure(['./components/pages/church/Leadership'], () => {
    resolve(require('./components/pages/church/Leadership'));
  })
}

const Mission = resolve => {
  require.ensure(['./components/pages/church/Mission'], () => {
    resolve(require('./components/pages/church/Mission'));
  })
}

const Vision = resolve => {
  require.ensure(['./components/pages/church/Vision'], () => {
    resolve(require('./components/pages/church/Vision'));
  })
}

const WorshipTimes = resolve => {
  require.ensure(['./components/pages/church/WorshipTimes'], () => {
    resolve(require('./components/pages/church/WorshipTimes'));
  })
}


export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/contact', component: Contact },
  { path: '/donate', component: Donate, name: 'donate' },
  { path: '/gallery', component: Gallery, name: 'gallery' },
  { path: '/sermon', component: Sermon, name: 'sermon' },
  { path: '/church/about', component: About },
  { path: '/church/leadership', component: Leadership },
  { path: '/church/mission', component: Mission },
  { path: '/church/vision', component: Vision },
  { path: '/church/worship-times', component: WorshipTimes },
  // { path: '/*', redirect: {name: 'home'} }
]