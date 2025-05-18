<template>
	<section class=" d-flex flex-column align-items-center">
		<header>
			<img src="/imgs/forest.jpeg" alt="header image" class="img-fluid">
			<button aria-label="Edit cover photo"
				class="btn btn-light btn-sm d-flex align-items-center justify-content-center gap-2" tabindex="0">

				<span class="material-icons-outlined">
					photo_camera
				</span>
				<span class="fw-bold d-none d-md-block">
					Edit cover photo
				</span>

			</button>
		</header>
		<article
			class="d-flex align-items-center position-relative flex-column px-3 w-100 flex-md-row justify-content-md-between">
			<img class="position-relative bottom-0 start-0 responsive-start" src="/imgs/avatar.avif" alt="">
			<div class="d-flex flex-column name-holder align-items-center align-items-md-start">
				<h2 class="mb-0 fw-bold">Sebastian Maikol</h2>
				<p>Frontend Developer</p>
			</div>
			<div class="d-flex gap-2">
				<ButtonComp buttonClassName="btn-primary" :onClick="handleAddFriend">
					<span class="material-icons-outlined">
						person_add
					</span> Add friend
				</ButtonComp>
				<ButtonComp buttonClassName="btn-outline-secondary" :onClick="handleSendMessage">
					<span class="material-icons-outlined">send</span>
					Message
				</ButtonComp>
			</div>

		</article>
	</section>
	<ModalComp :visible="modalClass" :toggle-visibility="() => showModal = !showModal"></ModalComp>
</template>

<script>
import ButtonComp from '../components/ui/ButtonComp.vue'
import ModalComp from '../components/ModalComp.vue'
export default {
	name: 'ProfileView',
	components: {
		ButtonComp,
		ModalComp
	},
	methods: {
		handleAddFriend() {
			console.log("Add Friend button clicked!")
			this.showModal = true
			// your logic here
		},
		handleSendMessage() {
			console.log("Send Message button clicked!")
			this.showModal = true

			// your logic here
		}
	},
	data() {
		return {
			showModal: false
		}
	},
	computed: {
		modalClass() {
			return this.showModal ? 'd-block' : 'd-none'
		}
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

@media (min-width: 768px) {
	.responsive-start {
		left: 37px !important;
		position: absolute !important;
		/* or whatever value you want */
	}

	.name-holder {
		margin-left: 205px;
	}
}
</style>