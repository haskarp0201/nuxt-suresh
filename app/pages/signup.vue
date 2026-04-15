<script setup>
const email = ref('')
const password = ref('')
const { $supabase } = useNuxtApp()

const signup = async () => {
  const { error } = await $supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error.message)
  } else {
    // eslint-disable-next-line @stylistic/quotes
    alert("Check your email to verify ✅")
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2>Signup</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="signup"> Signup</button>
  </div>
</template>
