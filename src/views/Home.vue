<template>
  <div>
    <h1>Home</h1>
    <p>
      <router-link to="/register">登録</router-link>
    </p>
    <p>
      <router-link to="/login">ログイン</router-link>
    </p>
    <button @click="query">
      GraphQL実行
    </button>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { auth } from '../main';
import { getMatches } from '../graphql/query'

export default {
  name: 'Home',
  setup() {
    const token = ref('')
    const data = ref({})
    const URL = 'http://localhost:8000'
    const headers = computed(() => {
      return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    const query = async () => {
      const res = await fetch(`${URL}/graphql`, {
        method: 'POST',
        headers: headers.value,
        body: JSON.stringify(getMatches)
      })
      .catch(err => {
        console.log(err)
      })
      data.value = await res.json()
    }

    auth && auth.onAuthStateChanged((user) => {
      user.getIdToken().then(idToken => {
        token.value = idToken
      })
    })
    return {
      data,
      query
    }
  }
}
</script>

<style scoped>

</style>