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
    <!-- <h2>Dashboard</h2> -->
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: 'DashboardView',
  components: {
    Dashboard,
  },
};
</script>

<style scoped>
/* Стили для DashboardView.vue */
</style>