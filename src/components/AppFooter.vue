<script>
export default {
  name: "app-footer",
};
</script>

<template>
  <footer>
    <span><a href="//vuejs.org">Vue.js</a></span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  box-sizing: border-box;
  background-color: $secondary-color;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;

  a {
    text-decoration: none;
    color: $txt-color;
  }
}
</style>
