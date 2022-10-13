import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import System from '../components/System.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue'),
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/system',
        name: 'System',
        component: System,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/')
    next()
  })

export default router