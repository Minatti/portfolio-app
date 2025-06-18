import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import Sobre from '@/components/Sobre.vue';
import Servicos from '@/components/Servicos.vue'
import Login from '@/pages/Login.vue';
import Blog from '@/pages/Blog.vue';



const routes = [
  { 
    path: '/', name: 'Main', component: Main 
  },
  {
    path: '/sobre', name: 'Sobre', component: Sobre
  },
  {
    path: '/servicos', name: 'Servicos', component: Servicos
  },
  {
    path: '/login', name: 'Login', component: Login
  },
  {
    path: '/blog', 
    name: 'Blog', 
    component: Blog,
    meta: { requiresAuth: true}
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem('isLoggedIn') === 'true';

  // Verifica se a rota exige autenticação
  to.meta.requiresAuth && !isAuthenticated 
  ? next('/login') 
  : next();
  
});
