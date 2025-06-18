<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '@/auth/authLogin';

interface Credentials {
  email: string;
  password: string;
}

const credentials = ref<Credentials>({
  email: '',
  password: ''
});

const router = useRouter();
const errorMessage = ref('');

const login = () => {
  const { email, password } = credentials.value;

  // Simples validação mock
  email === 'admin@jedi' && password === '1234'
    ? (
      errorMessage.value = '',
      loginUser(), 
      router.push('/blog')
    )
    : errorMessage.value = 'Credenciais inválidas. Verifique seu e-mail e senha.';
};

</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-6 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="credentials.email"
            type="email"
            placeholder="Digite seu e-mail"
            class="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Senha</label>
          <input
            v-model="credentials.password"
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
