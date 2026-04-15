<script setup>
definePageMeta({
  middleware: 'auth'
})

const { $supabase } = useNuxtApp()
const user = ref(null)

onMounted(async () => {
  const { data } = await $supabase.auth.getUser()
  user.value = data.user
})
</script>

<template>
  <div>
    <h2>Dashboard 🔥</h2>
    <p v-if="user"> Welcome {{ user.email }}</p>
  </div>
</template>
