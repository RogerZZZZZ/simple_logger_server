import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Sidebar from './view/sidebar.vue'
import DefaultView from './view/default-view.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {path: '/', components: {default: DefaultView, sidebar: Sidebar}},
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
