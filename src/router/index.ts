import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

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
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
})

export default router
