<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { localMediaHistory } from '../stores';
	import MediaCard from './MediaCard.svelte';
	import { firebaseAuth, firebaseAuthProvider, firebaseDB } from '../firebase';
	import { onValue, ref, remove, set } from 'firebase/database';
	import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

	export let showModal: boolean;

	let displayMediaHistory: any;
	let dialog: HTMLDialogElement;

	$: {
		if (showModal) {
			getMediaHistory();
			dialog.showModal();
		}
	}

	const getMediaHistory = () => {
		console.log('Fetching media history...');
		if (firebaseAuth.currentUser) {
			// const mediaHistoryRef = ref(firebaseDB, `users/${firebaseAuth.currentUser.uid}/history`);
			// onValue(mediaHistoryRef, (snapshot) => {
			// 	const remoteMediaHistory = snapshot.val();
			// 	if ($localMediaHistory) {
			// 		displayMediaHistory = [
			// 			...new Set([...(remoteMediaHistory ?? []), ...($localMediaHistory ?? [])])
			// 		];
			// 		set(mediaHistoryRef, displayMediaHistory);
			// 		$localMediaHistory = null;
			// 	} else {
			// 		displayMediaHistory = remoteMediaHistory;
			// 	}
			// });
		} else {
			displayMediaHistory = $localMediaHistory;
		}
	};

	const onClickMedia = (media: any) => {
		window.location.assign(`${base}/session?id=${media.sessionId}&media-url=${media.hdUrl}`);
	};

	const onClearHistory = () => {
		if (!displayMediaHistory || displayMediaHistory.length === 0) return;

		if (confirm("Êtes-vous certain de vouloir supprimer l'intégralité de votre historique ?")) {
			$localMediaHistory = [];

			if (firebaseAuth.currentUser) {
				const mediaHistoryRef = ref(firebaseDB, `users/${firebaseAuth.currentUser.uid}/history`);
				remove(mediaHistoryRef)
					.then(() => {
						displayMediaHistory = [];
					})
					.catch((error) => {
						console.error("Erreur lors de la suppression de l'historique :", error);
					});
			} else {
				displayMediaHistory = [];
			}
		}
	};

	const signIn = async () => {
		try {
			await signInWithPopup(firebaseAuth, firebaseAuthProvider);
		} catch (error) {
			console.error('Erreur lors de la connexion avec Google :', error);
		}
	};

	onAuthStateChanged(firebaseAuth, (user) => {
		if (user) {
			console.log('Signed in as:', user.displayName || user.email);
			// getMediaHistory();
		} else {
			// TODO: Add a sign out button to clear history for account
			console.log('User is not signed in');
		}
	});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div id="dialog-container">
		<div id="dialog-header">
			<div class="dialog-title">
				<h2>Historique</h2>
				<button
					type="button"
					class="btn-danger"
					title="Effacer l'historique"
					on:click={() => onClearHistory()}
				>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<path
								d="M10 11V17"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M14 11V17"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M4 7H20"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</g></svg
					>
				</button>
			</div>
			<button type="button" title="Fermer" on:click={() => dialog.close()}>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<g clip-path="url(#clip0_429_11083)">
							<path
								d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</g>
						<defs>
							<clipPath id="clip0_429_11083">
								<rect width="24" height="24" fill="white"></rect>
							</clipPath>
						</defs>
					</g></svg
				>
			</button>
		</div>
		<hr />
		<div id="dialog-body">
			{#if !displayMediaHistory || displayMediaHistory.length == 0}
				<div id="placeholder">🙂‍↔️ Vous n'avez pas d'historique.</div>
			{/if}
			{#if !firebaseAuth.currentUser}
				<div id="placeholder">
					Pour synchroniser votre historique sur tous vos appareils, veuillez vous connecter.
				</div>
				<div class="container-btn">
					<button
						id="btn-google"
						type="button"
						aria-label="Se connecter avec Google"
						on:click={signIn}
					>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
							><path
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								fill="#4285F4"
							/><path
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								fill="#34A853"
							/><path
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								fill="#FBBC05"
							/><path
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								fill="#EA4335"
							/><path d="M1 1h22v22H1z" fill="none" /></svg
						>
						<span class="label">Se connecter avec Google</span>
					</button>
				</div>
			{/if}
			{#if displayMediaHistory && displayMediaHistory.length > 0}
				<hr />
				<div class="media-list">
					{#each displayMediaHistory as item}
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
		flex: 0 1 auto; /* do NOT force it to fill parent */
	}
	.media-list {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
	#placeholder {
		margin-top: 10px;
		margin-bottom: 10px;
		text-align: center;
	}
	.container-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		/* height: 100vh; */
		background-color: #ffffff;
	}
	#btn-google {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		color: #334155;
		background: none;
		cursor: pointer;
		transition: all 150ms ease-in-out;
		user-select: none;
	}
	#btn-google:hover {
		border-color: #94a3b8;
		color: #0f172a;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}
	@media (prefers-color-scheme: dark) {
		dialog {
			background-color: #363062;
		}
		#btn-google:hover {
			border-color: #6b7280;
			color: #d1d5db;
		}
	}

	@media (max-width: 1000px) {
		dialog {
			max-width: 95%;
		}
	}
</style>
