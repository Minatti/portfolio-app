<script setup lang="ts">
  import Sobre from '@/components/Sobre.vue';
  import Servicos from '@/components/Servicos.vue';
</script>
<template>
  <section id="sobre" class="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-900">
    <Sobre />
  </section>
  <section id="servicos" class="p-4 bg-blue-100 border border-gray-400 text-cyan-900">
    <Servicos />
  </section>
</template>
