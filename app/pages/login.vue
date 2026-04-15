
<script setup>
const email = ref('')
const password = ref('')
const { $supabase } = useNuxtApp()
const router = useRouter()

const login = async () => {
  const { error } = await $supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error.message)
  } else {
    router.push('/dashboard')
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>
