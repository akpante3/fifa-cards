<!-- components/Navbar.vue -->
<template>
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-between">
        <li><img src="../../assets/icons/menu.svg" alt="My Icon" class="w-6 h-6" /></li>
        <li><NuxtLink to="/contact" class="text-white hover:text-gray-300"><img src="../../assets/icons/RS-logo.png" alt="My Icon" class="w-15 h-6" /></NuxtLink></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  