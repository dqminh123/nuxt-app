// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-api-party'
    ],
    apiParty: {
        endpoints: {
          jsonPlaceholder: {
            url: process.env.JSON_PLACEHOLDER_API_BASE_URL!,
            // Global headers sent with each request
            headers: {
              Authorization: `Bearer ${process.env.JSON_PLACEHOLDER_API_TOKEN!}`
            }
          }
        }
      }
})
