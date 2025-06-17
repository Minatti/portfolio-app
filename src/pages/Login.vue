<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

// Simula um login simples modo chinelão
function login() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Preencha todos os campos.';
    return;
  }

  // Autenticação simples para exemplo (substituir por chamada real depois)
  if (email.value === 'admin@jedi' && password.value === '1234') {
    sessionStorage.setItem('logged', 'true');
    router.push('/blog'); // Redireciona para a rota protegida
  } else {
    errorMessage.value = 'Email ou senha inválidos.';
  }
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-6 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail"
            class="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Senha</label>
          <input
            v-model="password"
            type="password"
            placeholder="Digite sua senha"
            class="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  </section>
</template>
