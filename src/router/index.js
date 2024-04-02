import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/contact-us', component: ContactUsPage },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export { router }