<script setup lang="ts">
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-10 mt-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo e Direitos -->
      <div>
        <h2 class="text-xl font-bold text-white mb-2">Empresa XPTO</h2>
        <p class="text-sm">© {{ year }} </p>
        <p class="text-sm"> Desenvolvido por 
            <a href="https://www.linkedin.com/in/luan-carminatti95/" 
               class="text-yellow-300 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer"> Luan Carminatti 
            </a>
            <p class="text-sm"> Todos os direitos reservados. </p>               
       </p>      
      </div>

      <!-- Navegação (Roadmap) -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Navegação</h3>
        <ul class="space-y-1 text-sm">
          <li><RouterLink to="/" class="hover:underline">Home</RouterLink></li>
          <li><RouterLink to="/sobre" class="hover:underline">Sobre</RouterLink></li>
          <li><RouterLink to="/servicos" class="hover:underline">Serviços</RouterLink></li>
          <li><RouterLink to="/blog" class="hover:underline">Blog</RouterLink></li>
        </ul>
      </div>

      <!-- Contato -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Contato</h3>
        <p class="text-sm">📍 Rua Kazordoon, 123 - Honbra</p>
        <p class="text-sm">📞 (11) 91234-5678</p>
        <p class="text-sm">🕒 Seg a Sex: 08:00 às 18:00</p>
      </div>

      <!-- Redes Sociais -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Redes Sociais</h3>
        <div class="flex space-x-4 mt-2">
          <!-- LinkedIn -->
          <a href="https://linkedin.com" target="_blank" class="hover:text-white hover:opacity-80">
            <img src="../assets/icons/linkedin.png" alt="LinkedIn" class="w-6 h-6"/>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com" target="_blank" class="hover:text-white hover:opacity-80">
            <img src="../assets/icons/instagram.png" alt="Instagram" class="w-6 h-6"/>
          </a>
          <!-- YouTube -->
          <a href="https://youtube.com" target="_blank" class="hover:text-white hover:opacity-80">
            <img src="../assets/icons/youtube.png" alt="YouTube" class="w-6 h-6"/>
          </a>
        </div>
       </div>
    </div>
  </footer>
</template>
