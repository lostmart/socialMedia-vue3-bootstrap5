<template>
	<nav class="navbar navbar-expand-lg bg-primary">
		<div class="container justify-content-evenly">
			<router-link
				to="/"
				class="nav-link"
				:class="{ active: activePath.home }"
				aria-current="page">
				<span class="material-icons-round"> home </span>
			</router-link>

			<router-link
				to="/about"
				class="nav-link"
				:class="{ active: activePath.about }">
				<span class="material-icons-round"> info </span>
			</router-link>

			<router-link
				to="/posts"
				class="nav-link"
				:class="{ active: activePath.posts }">
				<span class="material-icons-round"> featured_play_list </span>
			</router-link>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'NavComp',
		methods: {
			checkActive() {
				console.log(this.$route.path)
			},
		},
		created() {
			this.checkActive()
		},
		computed: {
			activePath() {
				if (this.$route.path === '/') {
					return {
						home: true,
						about: false,
						posts: false,
					}
				} else if (this.$route.path === '/about') {
					return {
						home: false,
						about: true,
						posts: false,
					}
				} else if (this.$route.path === '/posts') {
					return {
						home: false,
						about: false,
						posts: true,
					}
				} else {
					return {
						home: false,
						about: false,
						posts: false,
					}
				}
			},
		},
	}
</script>

<style scoped>
	.material-icons-round {
		color: rgb(248, 244, 244);
		font-size: 1.4em;
		background-color: rgba(218, 218, 218, 0.158);
		padding: 0.3em;
		border-radius: 50%;
		margin: 0.1em;
	}
	.active .material-icons-round {
		color: white;
		background-color: rgba(133, 128, 128, 0.158);
		border: 1px solid rgba(248, 244, 244, 0.342);
	}
</style>
