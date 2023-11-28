import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePost from '../views/CreatePost.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/create-post',
            name: 'createPost',
            component: CreatePost,
        },
    ]
});

export { router };
