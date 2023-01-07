<script>
export default {
  name: "app-header",
};
</script>

<template>
  <header>
    <span class="title">Project Board</span>
    <router-link class="btn-header" to="/">Mis paneles</router-link>
  </header>
</template>

<style lang="scss" scoped>
header {
  box-sizing: border-box;
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;

  .title {
    align-self: center;
    color: #eceff1;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
}

.btn-header {
  background-color: $secondary-color;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03);
  color: $txt-color;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 0.5rem;
}
</style>
