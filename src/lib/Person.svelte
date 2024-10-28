<script lang="ts">
	import { base } from "$app/paths";

	export let info: any;
	export let minimal: boolean = false;
</script>

<div class="person">
	{#if !minimal}
	<div class="person-avatar">
		<img class="avatar-image" src={info.photo?.url ?? `${base}/avatar_placeholder.png`} alt={info.firstName} />
	</div>
	{/if}
	<div class="person-info" class:minimal={minimal}>
		<div class="person-name">{`${info.firstName} ${info.lastName}`}</div>
		<div class="person-location">{minimal ? '(' : ''}{`${info.city.name}, ${info.country.name}`}{minimal ? ')' : ''}</div>
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

	.person-info.minimal {
		display: flex;
		align-items: baseline;
    	gap: 3px;
	}

	.person-name {
		font-weight: 600;
		font-size: .875rem;
	}

	.person-location {
		font-size: .6875rem;
	}
</style>