<!-- components/Navbar.vue -->
<template>
  <nav>
    <ul>
      <li>
        <img
          src="../../assets/icons/menu.svg"
          alt="menu icon"
          class="w-6 h-6"
        />
      </li>
      <li>
        <NuxtLink to="/"
          ><img
            src="../../assets/icons/RS-logo.png"
            alt="site logo"
            class="w-15 h-6"
        /></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
nav {
  @apply p-4  mb-7 flex justify-center;
  background-color: var(--background-color-2);
}
ul {
  @apply flex justify-between;
  max-width: 1500px;
  width: 100%;
}
</style>
