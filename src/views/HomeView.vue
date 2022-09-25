<template>
	<div class="home">
		<div class="row">
			<div class="col">
				<img alt="Vue logo" src="../assets/img/wordmark.svg" />
			</div>
			<div class="col"></div>
		</div>
	</div>
</template>

<script>
	import CardComp from '@/components/CardComp.vue'
	// @ is an alias to /src

	export default {
		name: 'HomeView',
		components: { CardComp },
		data() {
			return {
				imgUrl: '',
				title: '',
				cardParragrapho: '',
				btnArray: [
					{
						text: 'hola boton',
						class: 'btn-success',
					},
					{
						text: 'Borrar',
						class: 'btn-danger',
					},
				],
			}
		},
	}
</script>

<style scoped></style>
