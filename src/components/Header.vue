<template>
  <header class="bg-blue-950 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-2xl font-bold text-white">Empresa XPTO</h1>

      <!-- Menu -->
      <nav class="space-x-6">
        <RouterLink 
          to="/" 
          class="text-gray-100
                 hover:text-white 
                 font-semibold">
          Home
        </RouterLink>
        <a href="#sobre" class="text-gray-100 hover:text-white font-semibold">Sobre</a>
        <a href="#servicos" class="text-gray-100 hover:text-white font-semibold">Serviços</a>   
      </nav>

      <!-- Botão WhatsApp -->
      <a
        href="https://wa.me/#"
        target="_blank"
        rel="noopener"
        class="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.52 3.48a11.92 11.92 0 00-16.86 0 11.88 11.88 0 00-2.29 13.09L.54 23.46 7.5 21.63a11.9 11.9 0 0013.02-2.29 11.92 11.92 0 000-16.86zm-4.55 11.61c-.25.7-1.45 1.37-2 1.45-.52.07-1.13.1-1.8-.11a9.51 9.51 0 01-1.59-.62c-2.77-1.28-4.58-4.08-4.73-4.27-.14-.2-1.13-1.5-1.13-2.86 0-1.37.72-2.05.98-2.3.25-.25.55-.32.75-.32h.55c.17 0 .4 0 .6.45l.7 1.69c.14.35.3.77.26.92-.04.14-.08.25-.17.38-.1.12-.18.25-.26.37-.08.12-.17.26-.07.45s.42.7.9 1.13c.62.55 1.14.72 1.34.8.2.08.32.07.43-.05.11-.12.5-.6.64-.81s.27-.17.45-.1c.18.07 1.14.53 1.33.63.2.1.33.15.37.23.04.08.04.42-.21 1.12z"
          />
        </svg>
        Entre em Contato
      </a>
    </div>
  </header>
  </template>

