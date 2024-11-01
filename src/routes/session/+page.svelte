<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { getFriendlyDate, getTimeEmoji, sanitizeFilename } from '$lib/Constants.svelte';
	import Speakers from '$lib/Speakers.svelte';
	import Person from '$lib/Person.svelte';
	import { mediaHistory, prefs } from '../../stores';
	import MediaCard from '$lib/MediaCard.svelte';
	import MediaHistoryButton from '$lib/MediaHistoryButton.svelte';
	import Switch from '$lib/Switch.svelte';

	const MEDIA_HISTORY_LIMIT = 25;

	const searchParams = browser && $page.url.searchParams;
	let sessionId: string | null;
	let selectedMediaUrl: string | null;

	if (searchParams) {
		sessionId = searchParams.get('id');
		selectedMediaUrl = searchParams.get('media-url');
	}

	let loading = true;
	let sessionDetail: any;
	let eventDetail: any;
	let objectives: string;
	let moderators: [any];
	let responsables: [any];

	let currentMedia: any;
	let autoplay: boolean = $prefs?.autoplay ?? false;

	let mediaList: {
		id: string | null;
		title: string;
		hdUrl: string;
		url: string;
		thumbnail: string;
		start: string;
		speakers: [any] | null;
	}[] = [];

	const fileExists = (fileUrl: string) => {
		var http = new XMLHttpRequest();

		http.open('HEAD', fileUrl, false);
		http.send();

		return http.status != 404;
	};

	const getBestMediaSource = (media: any) => {
		if (screen.width <= 1024 && media.url) {
			return media.url;
		}

		return media.hdUrl;
	};

	onMount(async () => {
		// await new Promise(r => setTimeout(r, 3000));

		const response = await fetch(`${base}/json/${sessionId}.json`);
		sessionDetail = await response.json();
		eventDetail = sessionDetail.data.event;

		objectives = eventDetail.objectives.map((value: string) => `<div class="objectives-value">${value}</div>`).join('');

		moderators = eventDetail.roles.find((role: any) => role.name === 'modérateur')?.assignees.items;
		responsables = eventDetail.roles.find((role: any) => role.name === 'responsable')?.assignees.items;

		// Add publicly available media to the media list
		for (const item of eventDetail.schedule.items) {
			if (item.vod && item.vod.media && item.vod.media.element && item.vod.media.element.sources) {
				mediaList.push({
					id: item.vod.media.id,
					title: item.vod.media.id ? item.title : `${item.title} Ⓜ️`,
					hdUrl: item.vod.media.element.sources[0].uri,
					url: item.vod.media.element.sources[1]?.uri,
					thumbnail: item.vod.media.thumbnail,
					start: item.start.split('T')[1].split('+')[0],
					speakers: item.speakers.items
				});
			}
		}

		if (eventDetail.vod && eventDetail.vod.media && eventDetail.vod.media.element && eventDetail.vod.media.element.sources) {
			mediaList.push({
				id: eventDetail.vod.media.id,
				title: eventDetail.vod.media.title ?? '[Sans titre]',
				hdUrl: eventDetail.vod.media.element.sources[0].uri,
				url: eventDetail.vod.media.element.sources[1]?.uri,
				thumbnail: eventDetail.vod.media.thumbnail,
				start: eventDetail.start.split('T')[1].split('+')[0],
				speakers: eventDetail.speakers.items
			});
		}

		// Check and add hidden media
		if (eventDetail.picture) {
			// e.g. https://services.medicalcongress.online/congress/medias/2023/JFR-2023/2072/video/thumbs/poster.jpg
			const hiddenMedia: any = {
				id: null,
				title: '[Non répertoriée]',
				thumbnail: eventDetail.picture,
				start: eventDetail.start.split('T')[1].split('+')[0],
				speakers: null
			};

			const possibleHDVideoUrl =
				eventDetail.picture.split('/video/')[0] + '/video/y_1080p_4000kb.mp4';
			const addHdUrl = !mediaList.some((item) => item.hdUrl === possibleHDVideoUrl) && fileExists(possibleHDVideoUrl);
			if (addHdUrl) {
				hiddenMedia.hdUrl = possibleHDVideoUrl;
			}

			const possibleVideoUrl =
				eventDetail.picture.split('/video/')[0] + '/video/y_480p_800kb.mp4';
			const addUrl = !mediaList.some((item) => item.url === possibleVideoUrl) && fileExists(possibleVideoUrl);
			if (addUrl) {
				hiddenMedia.url = possibleVideoUrl;
			}

			if (hiddenMedia.hdUrl || hiddenMedia.url) {
				mediaList.push(hiddenMedia);
			}
		}

		mediaList = mediaList.toSorted((a: any, b: any) => a.start.localeCompare(b.start))

		if (mediaList.length > 0) {
			if (selectedMediaUrl) {
				currentMedia = mediaList.find((item) => item.hdUrl === selectedMediaUrl);
			}

			if (!currentMedia) {
				currentMedia = mediaList[0];
			}
		}

		loading = false;
	});


	const onMediaPlay = (media: any) => {
		const filteredArray = $mediaHistory.filter((item: any) => item.hdUrl !== media.hdUrl);

		// console.log("onMediaPlay", media);
		const historyMedia = structuredClone(media);
		historyMedia["sessionId"] = sessionId;
		historyMedia["sessionTitle"] = eventDetail.title;
		historyMedia["sessionTypeColor"] = eventDetail.sessionTypeColor !== '#000000' ? eventDetail.sessionTypeColor : '#dfdfdf';

		$mediaHistory = [historyMedia, ...filteredArray].slice(0, MEDIA_HISTORY_LIMIT);
	}

	$: if ($prefs) $prefs = {autoplay: autoplay};
</script>

<svelte:head>
	<title>{eventDetail ? eventDetail.title : 'JFR 2024'}</title>
</svelte:head>

<main>
	<div id="navbar">
		<a href="{base}/" class="one-liner">
			<i class="gg-chevron-left" /> Retour
		</a>
		<MediaHistoryButton />
	</div>

	{#if loading}
	<div class="DNA_cont">
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
		<div class="nucleobase"></div>
	</div>
	{/if}

	{#if !loading && eventDetail}
	{#if mediaList.length > 0}
	<div class="media">
		<div class="current-media">
			<div id="current-media-info">
				<div><strong>{currentMedia.title ?? '😶‍🌫️'}</strong></div>
				{#if currentMedia.speakers}
				<Speakers speakers={currentMedia.speakers} />
				{/if}
			</div>
			<div id="video-container">
				<video {autoplay} controls class="video-player" src={getBestMediaSource(currentMedia)} poster={currentMedia.thumbnail} on:play={() => onMediaPlay(currentMedia)}>
					<track kind="captions" />
				</video>
			</div>
			<div class="detail screen-big" style="border-left-color: {eventDetail.sessionTypeColor}">
				<div class="session-header">
					<div class="session-type" style="color: {eventDetail.sessionTypeColor !== '#000000' ? eventDetail.sessionTypeColor : '#dfdfdf'}">{eventDetail.sessionType}</div>
					<h1>{eventDetail.title}</h1>
					<div class="date-time subtitle">
						<div>
							🗓️ {getFriendlyDate(eventDetail.start.split('T')[0])}
						</div>
						<div>
							{getTimeEmoji(eventDetail.start.split('T')[1].split('+')[0])} {eventDetail.start.split('T')[1].split('+')[0] +
								' - ' +
								eventDetail.end.split('T')[1].split('+')[0]}
						</div>
					</div>
				</div>
				{#if objectives}
				<div class="objectives">
					<strong>Objectifs :</strong>
					<div>
						{@html objectives}
					</div>
				</div>
				{/if}
				{#if moderators || responsables}
				<table class="person-list">
					{#if moderators}
					<tr>
						<td class="role-label">Modérateur :</td>
						<td>
							{#each moderators as person}
							<Person info={person} />
							{/each}
						</td>
					</tr>
					{/if}
					{#if responsables}
					<tr>
						<td class="role-label">Responsable :</td>
						<td>
							{#each responsables as person}
							<Person info={person} />
							{/each}
						</td>
					</tr>
					{/if}
				</table>
				{/if}
			</div>
		</div>
		<div class="playlist-container">
			<div id="playlist-title">
				<strong>Liste de lecture ({mediaList.length}):</strong>
				<Switch bind:checked={autoplay} />
			</div>
			<div class="playlist">
				{#each mediaList as item}
				<MediaCard media={item} downloadable={true} bind:currentMedia={currentMedia} />
				{/each}
			</div>
		</div>
	</div>
	{/if}
	<div class="detail screen-small {mediaList.length == 0 ? 'no-media' : ''}" style="border-left-color: {eventDetail.sessionTypeColor}">
		<div class="session-header">
			<div class="session-type" style="color: {eventDetail.sessionTypeColor !== '#000000' ? eventDetail.sessionTypeColor : '#dfdfdf'}">{eventDetail.sessionType}</div>
			<h1>{eventDetail.title}</h1>
			<div class="date-time subtitle">
				<div>
					🗓️ {getFriendlyDate(eventDetail.start.split('T')[0])}
				</div>
				<div>
					{getTimeEmoji(eventDetail.start.split('T')[1].split('+')[0])} {eventDetail.start.split('T')[1].split('+')[0] +
						' - ' +
						eventDetail.end.split('T')[1].split('+')[0]}
				</div>
			</div>
		</div>
		{#if objectives}
		<div class="objectives">
			<strong>Objectifs :</strong>
			<div>
				{@html objectives}
			</div>
		</div>
		{/if}
		{#if moderators || responsables}
		<table class="person-list">
			{#if moderators}
			<tr>
				<td class="role-label">Modérateur :</td>
				<td>
					{#each moderators as person}
					<Person info={person} />
					{/each}
				</td>
			</tr>
			{/if}
			{#if responsables}
			<tr>
				<td class="role-label">Responsable :</td>
				<td>
					{#each responsables as person}
					<Person info={person} />
					{/each}
				</td>
			</tr>
			{/if}
		</table>
		{/if}
	</div>
	{/if}
</main>

<style>
	* {
		box-sizing: border-box;
	}

	#navbar {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.one-liner {
		display: flex;
		align-items: center;
	}

	.gg-chevron-left {
		box-sizing: border-box;
		position: relative;
		display: block;
		transform: scale(var(--ggs, 1));
		width: 22px;
		height: 22px;
		border: 2px solid transparent;
		border-radius: 100px;
	}
	.gg-chevron-left::after {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 10px;
		height: 10px;
		border-bottom: 2px solid;
		border-left: 2px solid;
		transform: rotate(45deg);
		left: 6px;
		top: 4px;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		padding: 15px;
		max-height: 100%;
		width: 100%;
	}

	.detail {
		flex-direction: column;
		flex-grow: 0;
		gap: 10px;
		border-left: 6px solid;
    	border-radius: 4px;
		padding: 16px;
		width: 100%;
	}

	.session-type {
		font-size: .75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.session-header {
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	h1 {
		font-size: 20px;
	}

	.objectives {
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		padding: 15px;
		font-size: .9rem;
	}

	:global(.objectives-value) {
		margin-top: 10px;
	}

	/* blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre { */
	:global(.objectives p) {
		margin: 0;
	}

	.role-label {
		color: #8e8e8e;
		font-size: .75rem;
		font-weight: 600;
		margin-right: 8px;
		text-transform: uppercase;
	}

	table.person-list {
		table-layout: auto;
		width: fit-content;
	}

	table.person-list > tr td:first-child {
		vertical-align: top;
		padding-top: 10px;
		min-width: 90px;
	}

	table.person-list > tr td:last-child {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.media {
		display: flex;
		gap: 15px;
		flex-grow: 1;
		width: 100%;
		min-height: 469px;
	}

	#current-media-info, #playlist-title {
		display: flex;
		flex-direction: column;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		padding: 8px 12px;
		background-color: rgb(24, 26, 27);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.playlist-container #playlist-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.current-media {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	#video-container {
		display: flex;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		overflow: hidden;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
		border: 1px solid;
		border-color: rgb(24, 26, 27);
		min-height: 411px;
	}

	video {
		width: 100%;
	}

	.playlist-container {
		flex: 0 0 35%;
		display: flex;
		flex-direction: column;
		max-height: 100%;
	}

	.playlist {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		background-color: rgb(24, 26, 27);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 5px;
	}

	@media (max-width: 1000px) {
		main {
			max-height: fit-content;
			padding: 8px;
		}

		.objectives {
			width: 100%;
		}

		.media {
			flex-direction: column;
			overflow-y: auto;
		}

		.playlist {
			max-height: 450px;
		}

		.detail.screen-small {
			display: flex;
		}

		.detail.screen-big {
			display: none;
		}

		#video-container {
			min-height: unset;
		}
	}

	@media (min-width: 1000px) {
		.detail.screen-small:not(.no-media) {
			display: none;
		}

		.detail.screen-big {
			display: flex;
			margin-top: 10px;
		}
	}

	@media (prefers-color-scheme: light) {
		.detail, .playlist {
			background-color: #fff;
		}

		#current-media-info, #playlist-title {
			background-color: #fdfdfd;
			border-bottom: 1px solid #dddddd;
		}

		#video-container {
			border-color: #fdfdfd;
		}

		.objectives {
			color: #545454;
			background-color: #fdfdfd;
		}
	}
</style>
