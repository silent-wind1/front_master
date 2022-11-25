import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("@/views/Home")
const Classify = () => import('@/views/Classify')
const Tag = () => import("@/views/Tag");
const Archives = () => import("@/views/Archives")
const Detailed = () => import("@/views/detailed")
const Login = () => import("../views/Login")

const Admin = () => import("../views/Admin")
const admin_info = () => import("../views/admin/admin_info")
const admin_comment = () => import("../views/admin/admin_comment")
const append_blog = () => import("../views/admin/append_blog")
const query_blog = () => import("../views/admin/query_blog")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: "/classify",
    name: 'classify',
    component: Classify,
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag,
  },
  {
    path: '/Archives',
    name: 'archives',
    component: Archives
  },
  {
    path: '/detailed',
    name: 'detailed',
    component: Detailed
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '',
        redirect: '/admin/admin_info'
      },
      {
        path: 'admin_info',
        component: admin_info,
        meta: {
          title: '管理',
          // requireAuth: true, // 判断用户是否登录
          redirect: true, // 判断用户是否登录
        },
      },
      {
        path: 'admin_comment',
        component: admin_comment
      },
      {
        path: 'append_blog',
        component: append_blog
      },
      {
        path: 'query_blog',
        component: query_blog
      }
    ],

  },

]


const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
