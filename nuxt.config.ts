// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

    runtimeConfig: {
    public: {
      supabaseUrl: 'https://ajmvtjkwnyexrtpvwtbl.supabase.co',
      supabaseKey: 'sb_publishable_KT5pKgQ7D8eo5HMyS9LM4A_RRn1-QAi'
    }
  }
,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
