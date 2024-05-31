// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
// vite:false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/sanity'],
  // TODO: put sanity config to .env file
  sanity: {
    projectId: "21fy9g0s",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  },
  devServer: {
    port: 3000
  },
  css: ['~/assets/main.css'],
  plugins: [
    { src: '~/plugins/sanity-image-builder.js', mode: 'client' }
  ]
})