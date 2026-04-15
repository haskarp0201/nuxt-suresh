export default defineNuxtRouteMiddleware(async () => {
  const { $supabase } = useNuxtApp()

  const { data } = await $supabase.auth.getUser()

  if (!data.user) {
    return navigateTo('/login')
  }
})