<script setup lang="ts">
import { API_URL } from '@/api/config'
import { ref, onMounted } from 'vue';
import { getPosts } from '@/services/postService';

const posts = ref<Post[]>([]);

onMounted(async () => {
  posts.value = await getPosts();
});

</script>
<template>
  <section class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Blog</h1>
    <p class="text-gray-600 mb-8">Artigos e novidades sobre tecnologia e projetos.</p>
    <!-- Exemplo de conteúdo -->
    <div class="space-y-4">
      <h1 class="text-2xl font-bold mb-4">Posts</h1>
      <article>
        <ul>
          <li v-for="post in posts" :key="post.id" class="mb-4 border-l-4 px-10 border-blue-700 bg-white shadow p-4 rounded-lg hover:shadow-lg transition">
             <h2 class="text-2xl font-semibold text-blue-700">
                {{ post.titulo }}
            </h2>
            <p>{{ post.conteudo }}</p>
            <small class="text-gray-500">
                  {{ post.autor }} - Criado em 
                  {{ new Date(post.data_criacao).toLocaleDateString() }}
            </small>
            <p> <a href="#">leia mais...</a> </p>
          </li>          
        </ul>
      </article>
    </div>
  </section>
</template>
