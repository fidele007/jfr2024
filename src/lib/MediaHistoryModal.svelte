<script lang="ts">
	import { base } from '$app/paths';
	import { mediaHistory } from "../stores";
	import MediaCard from './MediaCard.svelte';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: {
		if (showModal) dialog.showModal();
	}

	const onClickMedia = (media: any) => {
		window.location.assign(`${base}/session?id=${media.sessionId}&media-url=${media.hdUrl}`);
	}

	const onClearHistory = () => {
		if (!$mediaHistory || $mediaHistory.length === 0) return;

		if (confirm("Êtes-vous certain de vouloir supprimer l'intégralité de votre historique ?")) {
			$mediaHistory = [];
		}
	}
</script>


<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div id="dialog-container">
		<div id="dialog-header">
			<div class="dialog-title">
				<h2>Historique</h2>
				<button type="button" class="btn-danger" title="Effacer l'historique" on:click={() => onClearHistory()}>
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
				</button>
			</div>
			<button type="button" title="Fermer" on:click={() => dialog.close()}>
				<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
			</button>
		</div>
		<hr />
		<div id="dialog-body">
			{#if !$mediaHistory || $mediaHistory.length == 0}
			<div id="placeholder">🙂‍↔️ Vous n'avez pas d'historique.</div>
			{:else}
			<div class="media-list">
				{#each $mediaHistory as item}
				<MediaCard media={item} showTime={false} on:onClickMedia={(e) => onClickMedia(item)} />
				{/each}
			</div>
			{/if}
		</div>
	</div>
</dialog>

<style>
	dialog {
		min-width: 20em;
		max-width: 50%;
		min-height: 40%;
		/* height: 70%; */
		/* height: fit-content; */
		max-height: 90%;
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
	.dialog-title {
		display: flex;
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
	.btn-danger {
		color: #dc3545;
	}
	hr {
		width: 100%;
	}
	#dialog-body {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		flex: 0 1 auto;   /* do NOT force it to fill parent */
	}
	.media-list {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
	#placeholder {
		margin-top: 20px;
		margin-bottom: 20px;
		text-align: center;
	}
	@media (prefers-color-scheme: dark) {
		dialog {
			background-color: #363062;
		}
	}

	@media (max-width: 1000px) {
		dialog {
			max-width: 95%;
		}
	}
</style>