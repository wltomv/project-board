<script>
import BoardCard from "@/components/BoardCard.vue";

export default {
	name: "home-view",
	components: { BoardCard },
	data() {
		return {
			boardName: "",
			boards: [
				{ id: 1, name: "Tareas" },
				{ id: 2, name: "Compras" },
			],
		};
	},
	methods: {
		add() {
			this.boards.push({ name: this.boardName });
		},
	},
};
</script>

<template>
	<div class="container">
		<h3>Paneles</h3>
		<input
			type="text"
			placeholder="Añadir un nuevo panel"
			v-model="boardName"
			@keyup.enter="add()"
		/>
		<div class="boards-collection">
			<board-card
				v-for="(board, index) in boards"
				:key="index"
				:name="board.name"
				:id="board.id.toString()"
			>
			</board-card>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
h3 {
	text-align: left;
	margin: 1.5rem;
}
input {
	border-style: border-box;
	background-color: #f2f6f7;
	border: 2px solid $main-color;
	border-radius: 3px;
	font-size: 1.1rem;
	outline: 0;
	padding: 0.5rem;
	transition: all 600ms ease;
	max-height: 100px;

	&:focus,
	&:active {
		background-color: white;
		color: #546e7a;
	}

	&::placeholder {
		color: rgb(198, 195, 195);
	}
}
.boards-collection {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 1rem;
}
</style>
