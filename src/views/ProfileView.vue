<template>
	<section class=" d-flex flex-column align-items-center">
		<header>
			<img src="/imgs/forest.jpeg" alt="header image" class="img-fluid">
			<button aria-label="Edit cover photo"
				class="btn btn-light btn-sm d-flex align-items-center justify-content-center gap-2" tabindex="0">

				<span class="material-icons-outlined">
					photo_camera
				</span>
				<span class="fw-bold">
					Edit cover photo
				</span>

			</button>
		</header>
		<article class="d-flex align-items-center position-relative flex-column w-100">
			<img class="position-relative bottom-0 start-0" src="/imgs/avatar.avif" alt="">
			<div class="d-flex flex-column align-items-center">
				<h2>Sebastian Maikol</h2>
				<p>Frontend Developer</p>
			</div>
			<div class="d-flex gap-2">
				<button class="btn btn-primary d-flex gap-2 align-items-center"> <span class="material-icons-outlined">
						person_add
					</span> Add friend</button>
				<button class="btn btn-outline-secondary gap-2 d-flex align-items-center"> <span
						class="material-icons-outlined">
						send
					</span> Message</button>
			</div>
			<ButtonComp buttonClassName="btn-primary">
				<span class="material-icons-outlined">send</span>
				Message
			</ButtonComp>
		</article>
	</section>
</template>

<script>
import ButtonComp from '../components/ui/ButtonComp.vue'
export default {
	name: 'ProfileView',
	components: {
		ButtonComp
	}
}
</script>


<style scoped>
section {
	min-height: 75dvh;
	max-width: 1095px;
	margin: auto;
}

header {
	position: relative;
}

header>img {
	max-inline-size: 100%;
	display: block;
	aspect-ratio: 16/6;
	object-fit: cover;
	/*
	border-bottom-left-radius: max(0px, min(8px, -999900% + 1.39146e+07px)) 8px;
	border-bottom-right-radius: max(0px, min(8px, -999900% + 1.39146e+07px)) 8px;
	*/
}

header>button {
	position: absolute;
	bottom: 1.5em;
	right: 1.25em;
}

article>img {
	width: 168px;
	height: 168px;
	object-fit: contain;
	border-radius: 50%;
	margin-top: -84px;
}
</style>