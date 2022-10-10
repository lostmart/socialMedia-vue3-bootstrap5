<template>
	<div class="posts container">
		<img alt="mazebook" src="../assets/img/wordmark.svg" class="logo" />
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			parrafo="primer carta"
			:header="{
				name: 'Sebastian Maikol',
				picture: 'https://randomuser.me/api/portraits/men/81.jpg',
			}"
			:likes="true" />
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/4067904/pexels-photo-4067904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			parrafo="segunda carta"
			:header="{
				name: 'Susana Perez',
				picture: 'https://randomuser.me/api/portraits/women/81.jpg',
			}"
			:likes="true" />
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			parrafo="tercera carta"
			:likes="true" />
	</div>
</template>
<script>
	import CardComp from '../components/CardComp.vue'
	export default {
		name: 'PostsView',
		components: {
			CardComp,
		},
	}
</script>
<style scoped>
	.posts {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
	}
</style>
