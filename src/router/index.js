import Vue from 'vue'
import Router from 'vue-router'
import template from '@/pages/template'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'template',
      component: template
    }
  ]
})
