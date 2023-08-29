<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->

<template>
  <div>
    <!-- <h2>Chat</h2> -->
    <Chat />
  </div>
</template>

<script>
import Chat from "@/components/Chat.vue";

export default {
  name: 'ChatView',
  components: {
    Chat,
  },
};
</script>

<style scoped>
/* Стили для ChatView.vue */
</style>