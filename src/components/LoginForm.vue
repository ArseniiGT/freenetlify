<template>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  // import { auth } from '@/plugins/firebase.js';
  
  // export default {
  //   data() {
  //     return {
  //       email: '',
  //       password: '',
  //     };
  //   },
  //   methods: {
  //     login() {
  //       auth.signInWithEmailAndPassword(this.email, this.password)
  //         .then(() => {
  //           // Успешная аутентификация, выполните необходимые действия
  //         })
  //         .catch((error) => {
  //           // Обработка ошибок аутентификации
  //           console.error(error);
  //         });
  //     },
  //   },
  // };
  </script>
  
  <style>
  /* Стили для LoginForm.vue */
  </style>