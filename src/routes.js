import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Donate from './components/pages/Donate'
import Departments from './components/pages/Departments'
import Gallery from './components/pages/Gallery'
import Sermons from './components/pages/Sermons'
import AboutUs from './components/pages/church/AboutUs'
import Leaders from './components/pages/church/Leaders'
import MissionVision from './components/pages/church/MissionVision'
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
  { path: '/departments', component: Departments, name: 'departments' },
  { path: '/gallery', component: Gallery, name: 'gallery' },
  { path: '/sermons', component: Sermons, name: 'sermons' },
  { path: '/church/about-us', component: AboutUs },
  { path: '/church/leaders', component: Leaders },
  { path: '/church/mission-vision', component: MissionVision },
  { path: '/church/worship-times', component: WorshipTimes },
  // { path: '/*', redirect: {name: 'home'} }
]