<script setup lang="ts">
  import Sobre from '@/components/Sobre.vue';
  import Servicos from '@/components/Servicos.vue';
</script>
<template>
  <section id="#inicio" class="mt-10 p-4">
      <div>
        <p>Inicio</p>
      </div>
  </section>
  <section id="#sobre" class="mt-10 p-4">
    <Sobre />
  </section>
  <section id="#servicos" class="mt-10 p-4">
    <Servicos />
  </section>
</template>
