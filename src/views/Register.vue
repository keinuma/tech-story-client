<template>
  <h1>Register</h1>
  <form class="form" @submit.prevent="register">
    <label class="form-item">
      メールアドレス
      <input type="email" v-model="form.email" />
    </label>
    <label class="form-item">
      パスワード
      <input autocomplete type="password" v-model="form.password" />
    </label>
    <button class="form-item confirm-button" @click="register">
      確定
    </button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { auth } from '../main'

export default {
  name: "Register",
  setup() {
    const form = reactive({
      email: '',
      password: ''
    })
    const register = async () => {
      const res = await auth?.createUserWithEmailAndPassword(form.email, form.password)
      await res?.user?.sendEmailVerification({
        url: window.location.toString(),
        handleCodeInApp: false
      })
    }
    return {
      form,
      register
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-item {
  margin-top: 24px;
}
.confirm-button {
  width: 300px;
}
</style>
