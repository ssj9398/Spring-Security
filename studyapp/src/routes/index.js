import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '../views/MainView.vue';
import SignUpView from '../components/sign/SignUp.vue'
import LoginView from '../components/sign/Login.vue';
// import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: MainView,
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView,
        },                
    ]
});