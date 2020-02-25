import Home from './components/Home'
// import Trial from './components/Trial'
import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'

const Trial = resolve => { //Loading Routes lazily
  require.ensure(['./components/Trial'], () => {
    resolve(require('./components/Trial'));
  })
}

export const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/trial', component: Trial, beforeEnter:((to, from, next)=>{
    console.log('Inside route guard');
    next()
  })},
  {path: '/user', component: User, children:[
    {path: '', component: UserStart, name: 'userStart'},
    {path: ':id', component: UserDetail},//you can change the value of id in the url bar
    {path: ':id/edit', component: UserEdit, name: 'userEdit'},
  ]},
  {path: '/redirect', redirect: '/user'},
  {path: '/*', redirect: {name: 'home'}}
]