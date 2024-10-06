<script lang="ts">
	import { base } from '$app/paths';
	import { friendlyDates } from '$lib/Constants.svelte';

	export let info: any;

	const onSessionCardClick = () => {
		window.location.assign(`${base}/session?id=${info.id}`);
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={onSessionCardClick}>
	<div class="card-info">
		<div>{info.title}</div>
		<div class="date-time subtitle">
			<div>🗓️ {friendlyDates[info.start.split('T')[0]] ?? info.start.split('T')[0]}</div>
			<div>
				🕣 {info.start.split('T')[1].split('+')[0] + ' - ' + info.end.split('T')[1].split('+')[0]}
			</div>
		</div>
	</div>
	<div class="thumbnail-container">
		{#if info.picture}
			<img src={info.picture} alt={info.title} class="thumbnail" />
		{/if}
	</div>
</div>

<style>
	.card {
		display: flex;
		justify-content: space-between;
		gap: 5px;
		padding: 0.6em 1.2em;
		border-radius: 8px;
		background-color: #1a1a1a;
		-webkit-transition: all 100ms ease-in-out;
		transition: all 200ms ease-in-out;
		border: none;
		-webkit-box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
		box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05);
		min-height: 130px;
	}

	.card:hover {
		transform: scale(1.02);
		cursor: pointer;
	}

	.card-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		gap: 5px;
		flex-grow: 1;
	}

	.thumbnail-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		max-width: 50%;
		min-width: 20%;
	}

	.thumbnail {
		filter: grayscale(1);
		-o-object-fit: contain;
		object-fit: contain;
		max-width: 100%;
		height: 130px;
		max-height: 100%;
	}

	@media (prefers-color-scheme: light) {
		.card {
			background-color: #f9f9f9;
		}
	}

	@media (max-width: 1000px) {
		.thumbnail {
			height: unset;
		}
	}
</style>
