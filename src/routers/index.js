import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePost from '../views/CreatePost.vue';
import PostDetail from "../views/PostDetail.vue";

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
        {
            path: '/post/:slug',
            name: 'postDetail',
            component: PostDetail,
        },
    ]
});

export { router };
