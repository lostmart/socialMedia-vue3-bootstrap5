<template>
	<section class="container">
		<header>
			<img src="/imgs/forest.jpeg" alt="header image" class="img-fluid">
		</header>
		<h1>Perfil</h1>
	</section>
</template>

<script>
export default {
	name: 'ProfileView',
}
</script>


<style scoped>
section {
	min-height: 75dvh;
}

.container {
	padding: 0;
}

header>img {
	max-width: 1095px;
	object-fit: cover;
	max-height: 139px;
	width: 100%;
}
</style>