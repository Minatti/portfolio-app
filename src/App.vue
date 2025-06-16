<script setup lang="ts">
import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
    <main class="flex-grow p-4">
      <RouterView />
    </main>
  </div>
</template>
