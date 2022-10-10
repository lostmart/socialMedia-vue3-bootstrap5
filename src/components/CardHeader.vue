<template>
	<div class="card-header">
		<div class="row">
			<div class="col-2 col-sm-1">
				<img
					class="avatar-img"
					:src="header.picture"
					alt="Avatar de Sebastian" />
			</div>
			<div class="col-8 col-sm-9">
				<h4 class="card-header-title m-0">
					<router-link to="/profile">
						{{ header.name }}
					</router-link>
				</h4>
				<small class="text-muted card-header-subTitle">Hace dos minutos</small>
			</div>
			<div class="col-1">
				<button class="btn d-flex align-items-center more-btn">
					<span class="material-icons-round"> more_horiz </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardHeader',
		props: ['header'],
	}
</script>

<style scoped>
	.card-header {
		background-color: transparent;
		padding: 0.5rem 1rem;
		padding-bottom: 0;
		border-bottom: none;
	}

	.avatar-img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}

	.card-header-subTitle {
		font-size: 0.8em;
	}

	.card-header-title {
		line-height: 0.7;
	}

	.more-btn {
		border-radius: 50%;
		padding: 0.5em;
		margin: 0.3em;
	}

	@media (min-width: 576px) {
		.card-header .col-8 {
			margin-left: 1em;
		}
	}
</style>
