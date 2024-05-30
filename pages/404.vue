<template>
  <main class="not-found-container">
    <h1>404</h1>
    <div>
      <p>the resource you are looking for was not found</p>
    </div>
    <nuxt-link class="underline" to="/">View all cards</nuxt-link>
  </main>
</template>

<script>
export default {
  name: "404",
};
</script>

<style scoped lang="scss">
.not-found-container {
  @apply flex justify-center items-center flex-col;

  height: 100vh;
}
h1 {
  @apply text-7xl mb-5 font-extrabold;
}
p {
  @apply text-3xl;
}
</style>
