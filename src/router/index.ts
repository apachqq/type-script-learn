import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import LoginView from '@/views/LoginView.vue'
import index from '@/store'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/users',
        name: 'UsersView',
        component: () => import('../views/UsersView.vue')
    },
    {
        path: '/:notFound(.*)',
        name: 'PageNotFoundView',
        component: PageNotFoundView
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (!index.state.isAuth && to.name === 'UsersView') {
        alert('Чтобы получить доступ к списку пользователей, пожалуйста, авторизуйтесь')
        next('/login')
    } else {
        next()
    }
})

export default router
