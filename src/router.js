import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about',
                name: 'about us',
                component: AppAbout
            },
            {
                path: '/project',
                name: 'project',
                component: ProjectList
            },
            {
                path: '/about/:slug',
                name: 'single-project',
                component: SingleProject
            }
        ]
    }
);

export { router };