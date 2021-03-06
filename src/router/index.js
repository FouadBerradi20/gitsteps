import Vue from 'vue'
import VueRouter from 'vue-router'

/* intsall */
import Install from '../views/Install.vue'
import Shopify from '../views/install/Shopify.vue'
import Paypal from '../views/install/Paypal.vue'
/* dashboard */
import Dashboard from '../views/Dashboard.vue'
import Stats from '../views/dashboard/Stats.vue'
import Account from '../views/dashboard/Account.vue'
import Setting from '../views/dashboard/Setting.vue'
import Tuts from '../views/dashboard/Tuts.vue'
import Support from '../views/dashboard/Support.vue'

/*not found */
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/install',
    component: Install,
    children: [
      {
        path: 'shopify',
        component: Shopify
      },
      {
        path: 'paypal',
        component: Paypal
      }
    ]
  },

  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'stats',
        component: Stats
      },
      {
        path: 'support',
        component: Support
      },
      {
        path: 'account',
        component: Account
      },
      {
        path: 'setting',
        component: Setting
      },
      {
        path: 'tutorials',
        component: Tuts
      }
    ]
  },
  {
    path: '**',
    name: 'not found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
