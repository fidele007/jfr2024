<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { getFriendlyDate, getTimeEmoji } from './Constants.svelte';
	import { invoke, convertFileSrc } from "@tauri-apps/api/core";
	import { prefs } from '../stores';

	export let info: any;

	let responsables: string;
	let moderators: string;
	let speakers: string;
	let organizers: string;
	let tags: [string];
	let src: string;

	const resolveMediaThumbnailUrl = async (thumbnailUrl: string) => {
		// https://services.medicalcongress.online/congress/medias/2024/JFR2024/650/video/thumbs/poster.jpg
		if (!window.__TAURI_INTERNALS__) {
			src = thumbnailUrl;
			return;
		}

		const videoIdRegex = /\/(\d+)\/video\//g;
		const match = videoIdRegex.exec(thumbnailUrl);
		if (!match) {
			src = thumbnailUrl;
			return;
		}

		const dataDir = $prefs.dataDirectory ?? await invoke("get_executable_dir_path");
		const filePath = `${dataDir}/thumbs/${match[1]}.jpg`;
		src = convertFileSrc(filePath);
	}

	const onSessionCardClick = () => {
		window.location.assign(`${base}/session?id=${info.id}`);
	};

	onMount(() => {
		const responsableRole = info.outerRoles?.find((role: any) => role.name === 'responsable');
		if (responsableRole) {
			responsables = responsableRole.members.items.map((item: any) => `${item.firstName} ${item.lastName}`).join(', ');
		}

		const moderatorRole = info.outerRoles?.find((role: any) => role.name === 'modérateur');
		if (moderatorRole) {
			moderators = moderatorRole.members.items.map((item: any) => `${item.firstName} ${item.lastName}`).join(', ');
		}

		const speakerRole = info.outerRoles?.find((role: any) => role.name === 'speaker');
		if (speakerRole) {
			speakers = speakerRole.members.items.map((item: any) => `${item.firstName} ${item.lastName}`).join(', ');
		}

		organizers = info.organizers?.map((item: any) => item.name).join(', ');

		tags = info.tracks?.map((track: any) => track.label);

		resolveMediaThumbnailUrl(info.picture);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" style="border-left-color: {info.sessionTypeColor}" on:click={onSessionCardClick}>
	<div class="card-info">
		<div class="card-info-header">
			<div>
				<div class="card-type" style="color: {info.sessionTypeColor !== '#000000' ? info.sessionTypeColor : '#dfdfdf'}">{info.sessionType}</div>
				<div class="card-title">{info.title}</div>
				<div class="date-time subtitle">
					<div>🗓️ {getFriendlyDate(info.start.split('T')[0])}</div>
					<div>
						{getTimeEmoji(info.start.split('T')[1].split('+')[0])} {info.start.split('T')[1].split('+')[0] + ' - ' + info.end.split('T')[1].split('+')[0]}
					</div>
				</div>
			</div>
			{#if info.picture}
			<div class="thumbnail-container-small-screen">
				<img {src} alt={info.title} class="thumbnail" />
			</div>
			{/if}
		</div>
		{#if responsables}
		<div>
			<span class="participant-role-label">Responsable : </span>
			<span class="participant-value">{responsables}</span>
		</div>
		{/if}
		{#if moderators}
		<div>
			<span class="participant-role-label">Modérateur : </span>
			<span class="participant-value">{moderators}</span>
		</div>
		{/if}
		{#if speakers}
		<div>
			<span class="participant-role-label">Orateurs : </span>
			<span class="participant-value">{speakers}</span>
		</div>
		{/if}
		{#if organizers}
		<div>
			<span class="participant-role-label">Organisateur : </span>
			<span class="participant-value">{organizers}</span>
		</div>
		{/if}
		{#if tags}
		<div class="tag-list">
			{#each tags as tag}
			<div class="tag-name">{tag}</div>
			{/each}
		</div>
		{/if}
	</div>
	<div class="thumbnail-container-big-screen">
		{#if info.picture}
			<img {src} alt={info.title} class="thumbnail" />
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
		border-left: 6px solid #dfdfdf;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 700;
		text-overflow: ellipsis;
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

	.card-info-header {
		display: flex;
		gap: 10px;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.card-type {
		font-size: .75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.participant-role-label {
		color: rgb(161, 152, 140);
		font-size: .75rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.participant-value {
		color: rgb(191, 185, 177);
		font-size: .875rem;
    	font-weight: 600;
	}

	.tag-name {
		background-color: rgba(35, 184, 42, 0.067);
		border-color: rgb(35, 184, 42);
		border-radius: 50px;
		color: rgb(169, 161, 150);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .75rem;
		font-weight: 600;
		padding: 2px 8px;
	}

	.thumbnail-container-big-screen {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		min-width: 400px;
		max-width: 50%;
		width: 20%;
	}

	.thumbnail-container-big-screen > img {
		border-radius: 5px;
	}

	.thumbnail {
		/* filter: grayscale(1); */
		-o-object-fit: contain;
		object-fit: contain;
		max-width: 100%;
		height: 150px;
		max-height: 100%;
		border: 1px solid rgb(161 152 140 / 25%);
	}

	.thumbnail-container-small-screen {
		display: none;
		height: 100%;
		width: 100%;
    	max-height: 20vw;
		max-width: 20vw;
	}

	.thumbnail-container-small-screen > img {
		-o-object-fit: cover;
		object-fit: cover;
		border-radius: 5px;
	}

	@media (prefers-color-scheme: light) {
		.card {
			background-color: #f9f9f9;
		}

		.participant-value {
			color: #414141;
		}

		.tag-name {
			color: #646464;
		}
	}

	@media (max-width: 750px) {
		.thumbnail-container-big-screen {
			display: none;
		}

		.thumbnail-container-small-screen {
			display: flex;
		}

		.card-info {
			gap: unset;
		}
	}

	@media (max-width: 1000px) {
		.thumbnail {
			height: unset;
		}
	}
</style>
