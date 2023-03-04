<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
	<app-header />
	<router-view class="container"></router-view>
	<app-footer />
</template>

<style scoped>
#app {
	box-sizing: border-box;
	color: #37474f;
	margin: 0 auto;
	padding: 0;
}
</style>
