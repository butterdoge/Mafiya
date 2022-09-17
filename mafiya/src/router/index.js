import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleView from "../views/ArticleView";
import createNewArticle from "../views/createNewArticle";
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path:'/article',
    name:'article',
    component:ArticleView
  },
  {
    path:'/createNewArticle',
    name:'cr',
    component: createNewArticle
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
