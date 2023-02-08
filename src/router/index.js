import { createWebHistory, createRouter } from 'vue-router';
import Login from '../Login.vue'
import Home from '../components/Home.vue';

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router