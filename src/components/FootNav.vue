<template>
	<footer class="mt-5">
		<ul
			class="list-group list-group-flush list-group-horizontal text-center mb-0">
			<li class="list-group-item">
				<router-link class="router-link" to="/">Home </router-link>
			</li>
			<li class="list-group-item">
				<router-link class="router-link" to="/about">About </router-link>
			</li>
			<li class="list-group-item">
				<router-link class="router-link" to="/posts">Posts</router-link>
			</li>
		</ul>
		<img src="../assets/img/logo.png" alt="mazebook logo" />
		<div class="text-black-50 text-center">mazebook &#169; 2022</div>
	</footer>
</template>

<style scoped>
	footer {
		width: 100%;
	}
	img {
		max-width: 55px;
		margin: 0 auto;
		display: block;
	}

	.text-center {
		margin-top: -0.5em;
		margin-bottom: 0.5em;
	}

	.list-group {
		justify-content: center;
	}
	.list-group-item {
		border: none;
	}
	.router-link {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		footer {
			position: absolute;
		}
		img {
			position: relative;
			bottom: 0;
		}
	}
</style>
