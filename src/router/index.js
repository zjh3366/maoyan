import Vue from 'vue'
import VueRouter from 'vue-router'
import CenterView from '@/views/CenterView'
import SearchView from '@/views/SearchView'
import CinemasView from '@/views/CinemasView'
import DetailView from '@/views/DetailView'
import FilmsView from '@/views/FilmsView'
import OrderView from '@/views/OrderView'
import LoginView from '@/views/LoginView'
import ComingSoon from '@/views/Films/ComingSoon'
import NowPlaying from '@/views/Films/NowPlaying'

Vue.use(VueRouter)

const routes = [
  {
    path: '/center',
    component: CenterView
  },
  {
    path: '/cinemas',
    component: CinemasView
  },
  {
    path: '/cinemas/search',
    component: SearchView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/order',
    component: OrderView
  },
  {
    path: '/city',
    component: () => import('@/views/CityView')
  },
  {
    path: '/films',
    component: FilmsView,
    children: [
      {
        path: '/films/nowplaying',
        component: NowPlaying
      },
      {
        path: '/films/comingsoon',
        component: ComingSoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '*',
    redirect: '/films/nowplaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
