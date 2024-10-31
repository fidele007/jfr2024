<script lang="ts">
	import Person from '$lib/Person.svelte';
	import { mediaHistory } from "../stores";
	import Speakers from './Speakers.svelte';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: {
		if (showModal) dialog.showModal();
	}

	const onClickMedia = (media: any) => {
		console.log("Clicked media", media);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div id="dialog-container">
		<div id="dialog-header">
			<h2>Historique</h2>
			<button type="button" title="Fermer" on:click={() => dialog.close()}>
				<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
			</button>
		</div>
		<hr />
		<div id="dialog-body">
			{#if $mediaHistory.length == 0}
			<div id="placeholder">🙂‍↔️ Vous n'avez pas d'historique.</div>
			{/if}
			{#each $mediaHistory as item}
			<div
				on:click={() => onClickMedia(item)} on:keydown={(e) => e.key === 'Enter' && onClickMedia(item)}
				title={item.title}
				role="link"
				tabindex="0"
			>
				<div class="thumbnail-container">
					<img class="thumbnail" src={item.thumbnail} alt={item.title} />
				</div>
				<div class="video-details">
					<div class="session-title">
						<strong>{item.sessionTitle}</strong>
					</div>
					<div class="media-title">
						<strong>{item.title}</strong>
					</div>
					{#if item.speakers}
					<Speakers speakers={item.speakers} />
					{/if}
				</div>
			</div>
			{/each}
		</div>
	</div>
</dialog>

<style>
	dialog {
		min-width: 20em;
		max-width: 80%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	#dialog-container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	#dialog-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#dialog-header h2 {
		margin-top: 0;
		margin-bottom: 0;
	}
	#dialog-header button {
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 38px;
		outline: none;
		border: none;
		cursor: pointer;
		background-color: transparent;
	}
	hr {
		width: 100%;
	}
	#dialog-body {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#placeholder {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	@media (prefers-color-scheme: dark) {
		dialog {
			background-color: #363062;
		}
	}
	.session-title, .media-title {
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: box;
		font-size: 14px;
		line-clamp: 2;
		line-height: 1rem;
		max-height: 2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
    	display: -webkit-box;
	}

	.video-details {
		display: flex;
		flex-direction: column;
	}

	.thumbnail-container {
		display: flex;
		height: 100px;
		align-self: center;
		align-items: center;
	}

	.thumbnail {
		border-radius: 2px;
	}

	img {
		height: 100%;
		object-fit: contain;
	}
</style>
