import { createRouter, createWebHistory } from 'vue-router'
import MaHome from '@/views/MaHome.vue'
import MaList from '@/views/MaList.vue'
const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: MaHome
        }, {
            path: '/MaList',
            component : MaList
        }
    ]
});


export default router; 