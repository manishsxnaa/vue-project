import Vue from 'vue'
import Router from 'vue-router'
import Launch from './views/Launch.vue'

Vue.use(Router);

export default new Router({
    routes: [        
        {
            path: '/',
            name: 'launch',
            component: Launch
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },        
        {
            path: '/terms',
            name: 'terms',
            component: () => import('./views/Terms.vue')
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: () => import('./views/PrivacyPolicy.vue')
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('./views/ForgotPassword.vue')
        },
        {
            path: '/my-account',
            name: 'my-account',
            component: () => import('./views/MyAccount.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
});