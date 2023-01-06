<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
