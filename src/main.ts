import { createApp } from 'vue'
import * as firebase from '@firebase/app';
import '@firebase/auth'
import { router } from './router'
import App from './App.vue'
import './index.css'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SEDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

firebase.firebase.initializeApp(firebaseConfig)

export const auth = firebase.firebase.auth && firebase.firebase.auth()

const app = createApp(App)
app.use(router)
app.mount('#app')
