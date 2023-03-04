<script>
export default {
	name: "board-view",
	components: {},

	props: {
		name: String,
		id: String,
	},
};
</script>

<template>
	<section>
		<h3><span>My Boards</span> ▸ {{ this.$route.query.name }}</h3>
	</section>
</template>

<style lang="scss" scoped>
h3 {
	color: #37474f;
	text-align: left;
	margin: 1.5rem;
	span {
		color: #546e7a;
	}
}
section {
	text-align: left;
}
</style>
