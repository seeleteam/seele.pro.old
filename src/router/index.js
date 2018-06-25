import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import aboutUs from '@/components/aboutUs'
import activities from '@/components/activities'
import community from '@/components/community'
import meetups from '@/components/meetups'
import ecosystem from '@/components/ecosystem'
import economy from '@/components/economy'
import faq from '@/components/faq'
import news from '@/components/news'
import newsDetail from '@/components/newsDetail'
import startHere from '@/components/startHere'
import stateDetail from '@/components/stateDetail'
import announcement from '@/components/announcement'
import developers from '@/components/developers'
import faucet from '@/components/faucet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
    }, {
      path: '/activities',
      name: 'activities',
      component: activities,
    }, {
      path: '/community',
      name: 'community',
      component: community,
    },{
      path: '/meetups',
      name: 'meetups',
      component: meetups
    }, {
      path: '/ecosystem',
      name: 'ecosystem',
      component: ecosystem,
    }, {
      path: '/economy',
      name: 'economy',
      component: economy,
    }, {
      path: '/faq',
      name: 'faq',
      component: faq,
    },
    {
      path: '/stateDetail',
      name: 'stateDetail',
      component: stateDetail,
    },
    {
      path: '/startHere',
      name: 'startHere',
      component: startHere,
    },
    {
      path: '/news',
      name: 'news',
      component: news,
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: announcement,
    // },{
    //   path: '/developers',
    //   name: 'developers',
    //   component:developers
    // },{
    //   path: '/faucet',
    //   name: 'faucet',
    //   component:faucet
    }
  ]
})
