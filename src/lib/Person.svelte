<script lang="ts">
	import { base } from "$app/paths";

	export let info: any;
</script>

<div class="person">
	<div class="person-avatar">
		<img class="avatar-image" src={info.photo?.url ?? `${base}/avatar_placeholder.png`} alt={info.firstName} />
	</div>
	<div class="person-info">
		<div class="person-name">{`${info.firstName} ${info.lastName}`}</div>
		<div class="person-location">{`${info.city.name}, ${info.country.name}`}</div>
	</div>
</div>

<style>
	.person-avatar {
		min-height: 32px;
		max-height: 32px;
		min-width: 32px;
		max-width: 32px;
		border-radius: 50%;
		overflow: hidden;
	}

	.avatar-image {
		-o-object-fit: cover;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.person {
		display: flex;
		gap: 8px;
	}

	.person-name {
		font-weight: 600;
		font-size: .875rem;
	}

	.person-location {
		font-size: .6875rem;
	}
</style>