// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import PostsPage from './components/pages/PostsPage.vue';
import SearchPage from './components/pages/SearchPage.vue';



const routes = [
  { path: '/', component: HomePage },
  { path: '/posts', component: PostsPage},
  { path: '/search', component: SearchPage },
];


const router = createRouter({
    
    routes, history: createWebHistory(),
  });

export default router;
