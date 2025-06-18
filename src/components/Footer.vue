<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Ano atual automático
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
          <a href="https://linkedin.com" target="_blank" class="hover:text-white">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5C0 2.12 1.11 1 2.5 1S5 2.12 5 3.5zM0 24h5V8H0v16zM8 8h4.667v2.164h.067c.65-1.233 2.238-2.531 4.6-2.531C21.333 7.633 24 10.467 24 15.167V24h-5v-7.167c0-1.7-.033-3.9-2.367-3.9-2.367 0-2.733 1.85-2.733 3.767V24H8V8z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com" target="_blank" class="hover:text-white">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.976 1.254 2.243 1.316 3.609.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.976.975-2.243 1.254-3.609 1.316-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.976-1.254-2.243-1.316-3.609C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.976-.975 2.243-1.254 3.609-1.316C8.417 2.175 8.797 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.58.421 3.545 1.455 2.51 2.49 2.22 3.685 2.162 4.962.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.277.349 2.472 1.383 3.507 1.034 1.035 2.23 1.325 3.507 1.383C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.472-.349 3.507-1.383 1.035-1.034 1.325-2.23 1.383-3.507.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.349-2.472-1.383-3.507C19.42.421 18.225.13 16.948.072 15.668.013 15.259 0 12 0z"/>
              <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.18A4.018 4.018 0 1 1 16.018 12 4.022 4.022 0 0 1 12 16.018z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
