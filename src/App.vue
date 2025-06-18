<script setup lang="ts">
import Header from '@/components/Header.vue';
import { useRoute, RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const noHeaderRoutes = ['/login']; 

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header v-if="!noHeaderRoutes.includes(route.path)">

    </Header>
    <main class="flex-grow p-4">
      <RouterView />
    </main>
    <Footer>

    </Footer>
  </div>
</template>
