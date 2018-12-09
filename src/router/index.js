import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Issues from '@/components/Issues'
import AddIssue from '@/components/AddIssue'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/issues',
      name: 'Issues',
      meta: {
        requireAuth: true
      },
      component: Issues
    },
    {
      path: '/add',
      name: 'AddIssue',
      meta: {
        requireAuth: true
      },
      component: AddIssue
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
