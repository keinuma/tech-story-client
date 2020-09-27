<template>
  <h1>Login</h1>
  <form class="form" @submit.prevent="login">
    <label class="form-item">
      メールアドレス
      <input type="email" v-model="form.email" />
    </label>
    <label class="form-item">
      パスワード
      <input autocomplete type="password" v-model="form.password" />
    </label>
    <button class="form-item confirm-button" @click="login">確定</button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { auth } from '../main';

export default {
  name: "Login",
  setup() {
    const form = reactive({
      email: '',
      password: ''
    })
    const login = async () => {
      const res = await auth?.signInWithEmailAndPassword(form.email, form.password)
      const token = await res?.user?.getIdToken()
      console.log(token)
    }
    return {
      form,
      login
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
