<template>
	<div class="card">
		<div class="card-body">
			<h5 v-if="title" class="card-title">{{ title }}</h5>
			<p v-if="parrafo" class="card-text">
				{{ parrafo }}
			</p>
			<slot></slot>
			<div class="d-grid gap-2">
				<button
					v-for="btn in btns"
					:key="btn.txt"
					class="btn"
					:class="btn.class">
					{{ btn.txt }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardComp',
		props: ['title', 'parrafo', 'btns'],
	}
</script>

<style scoped>
	.card {
		border: none;
		box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
	}
</style>
