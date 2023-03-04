import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Board from "../pages/Board.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/board/:id",
		name: "board",
		component: Board,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
