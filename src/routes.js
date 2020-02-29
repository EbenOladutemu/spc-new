import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import Sermon from './components/pages/Sermon'
import Donate from './components/pages/Donate'

import About from './components/pages/church/About'
import Leadership from './components/pages/church/Leadership'
import Mission from './components/pages/church/Mission'
import Vision from './components/pages/church/Vision'
import WorshipTimes from './components/pages/church/WorshipTimes'

// const Trial = resolve => { //Loading Routes lazily
//   require.ensure(['./components/Trial'], () => {
//     resolve(require('./components/Trial'));
//   })
// }

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/contact', component: Contact },
  { path: '/donate', component: Donate, name: 'donate' },
  { path: '/gallery', component: Gallery, name: 'gallery' },
  { path: '/sermon', component: Sermon, name: 'sermon' },
  
  { path: '/church/about', component: About, name: 'about', children:[
    { path: '/church/leadership', component: Leadership },
    { path: '/church/mission', component: Mission },
    { path: '/church/vision', component: Vision },
    { path: '/church/worship-times', component: WorshipTimes }
  ]},
  // { path: '/*', redirect: {name: 'home'} }
]