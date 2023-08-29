<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->


<template>
    <div>
      <!-- <h2>Home</h2> -->
      <Home />
    </div>
  </template>
  
  <script>
  import Home from "@/components/Home.vue";
  
  export default {
    name: 'HomeView',
    components: {
      Home,
    },
  };
  </script>
  
  <style scoped>
  /* Стили для HomeView.vue */
  </style>