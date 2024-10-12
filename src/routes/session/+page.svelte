<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { getFriendlyDate, sanitizeFilename } from '$lib/Constants.svelte';
	import Person from '$lib/Person.svelte';

	const searchParams = browser && $page.url.searchParams;
	let sessionId: string | null;
	if (searchParams) {
		sessionId = searchParams.get('id');
	}

	let loading = true;
	let sessionDetail: any;
	let eventDetail: any;
	let objectives: string;
	let moderators: [any];
	let responsables: [any];

	let currentVideoTitle: string;
	let currentSpeakers: [any] | null;
	let currentVideoUrl: string;

	let mediaList: {
		id: string | null;
		title: string;
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

	const onClickPlaylistItem = (title: string, url: string, speakers: [any] | null) => {
		currentVideoTitle = title;
		currentSpeakers = speakers;
		console.log(currentSpeakers);
		currentVideoUrl = url;
	};

	const onDownload = (title: string, url: string) => {
		const anchor = document.createElement("a");
		anchor.href = url;

		const urlSplit = url.split(".");
		const fileExtension = "." + urlSplit[urlSplit.length - 1];
		anchor.download = sanitizeFilename(title) + fileExtension;

		anchor.target = "_blank";

		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	}

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
					title: item.title,
					url: item.vod.media.element.sources[0].uri,
					thumbnail: item.vod.media.thumbnail,
					start: item.start.split('T')[1].split('+')[0],
					speakers: item.speakers.items
				});
			}
		}

		// Check and add hidden media
		if (eventDetail.picture) {
			// e.g. https://services.medicalcongress.online/congress/medias/2023/JFR-2023/2072/video/thumbs/poster.jpg
			const possibleVideoUrl =
				eventDetail.picture.split('/video/')[0] + '/video/y_1080p_4000kb.mp4';

			const urlAlreadyIncluded = mediaList.some((item) => item.url === possibleVideoUrl);
			if (!urlAlreadyIncluded && fileExists(possibleVideoUrl)) {
				mediaList.push({
					id: null,
					title: '[Non répertoriée]',
					url: possibleVideoUrl,
					thumbnail: eventDetail.picture,
					start: eventDetail.start.split('T')[1].split('+')[0],
					speakers: null
				});
			}
		}

		if (mediaList.length > 0) {
			currentVideoTitle = mediaList[0].title + (mediaList[0].id ? '' : ' Ⓜ️');
			currentSpeakers = mediaList[0].speakers;
			currentVideoUrl = mediaList[0].url;
		}

		console.log(mediaList);

		loading = false;
	});
</script>

<svelte:head>
	<title>{eventDetail ? eventDetail.title : 'JFR 2024'}</title>
</svelte:head>

<main>
	<a href="{base}/" class="one-liner" on:click|preventDefault={() => history.back()}>
		<i class="gg-chevron-left" /> Retour
	</a>

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
				<div><strong>{currentVideoTitle ?? '😶‍🌫️'}</strong></div>
				{#if currentSpeakers}
				<div class="speakers">
					{#each currentSpeakers as speaker}
					<Person info={speaker} />
					{/each}
				</div>
				{/if}
			</div>
			<div id="video-container">
				<video controls class="video-player" src={currentVideoUrl}>
					<track kind="captions" />
				</video>
			</div>
		</div>
		<div class="playlist-container">
			<div id="playlist-title"><strong>Liste de lecture ({mediaList.length}):</strong></div>
			<div class="playlist">
				{#each mediaList as item}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="playlist-item {item.url == currentVideoUrl ? 'selected' : ''}"
						on:click={() => onClickPlaylistItem(item.title, item.url, item.speakers)}
						title={item.title}{item.id ? '' : ' Ⓜ️'}
					>
						<div class="thumbnail-container">
							<img class="thumbnail" src={item.thumbnail} alt={item.title} />
						</div>
						<div class="video-details">
							<div class="media-title"><strong>{item.title}{item.id ? '' : ' Ⓜ️'}</strong></div>
							<div class="subtitle">
								<span>🕣 {item.start}</span>
								<button type="button" title="Télécharger" class="btn-download" on:click={() => onDownload(item.title, item.url)}>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										class="svg-icon"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
											fill="currentColor"
										/>
										<path
											d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
											fill="currentColor"
										/>
									</svg>
									<div>Télécharger</div>
								</button>
							</div>
							{#if item.speakers}
							<div class="speakers">
								{#each item.speakers as speaker}
								<Person info={speaker} />
								{/each}
							</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	{/if}
	<div class="detail" style="border-left-color: {eventDetail.sessionTypeColor}">
		<div class="session-header">
			<div class="session-type" style="color: {eventDetail.sessionTypeColor !== '#000000' ? eventDetail.sessionTypeColor : '#dfdfdf'}">{eventDetail.sessionType}</div>
			<h1>{eventDetail.title}</h1>
			<div class="date-time subtitle">
				<div>
					🗓️ {getFriendlyDate(eventDetail.start.split('T')[0])}
				</div>
				<div>
					🕣 {eventDetail.start.split('T')[1].split('+')[0] +
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
		display: flex;
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
		overflow-y: hidden;
		min-height: 469px;
	}

	#current-media-info, #playlist-title {
		display: flex;
		flex-direction: column;
		gap: 5px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		padding: 8px 12px;
		background-color: rgb(24, 26, 27);
	}

	.current-media {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	#video-container {
		display: flex;
		border-left: 1px solid #bababa;
		border-right: 1px solid #bababa;
		border-bottom: 1px solid #bababa;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		overflow: hidden;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
	}

	video {
		max-width: 100%;
		/* height: calc(100% - 73px); */
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

	.playlist .playlist-item:first-child {
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
	}

	.playlist .playlist-item:last-child {
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	.playlist-item {
		display: flex;
		gap: 10px;
		padding: 5px;
		cursor: pointer;
	}

	.playlist-item.selected,
	.playlist-item:hover {
		background-color: rgb(33, 36, 37);
	}

	.playlist-item.selected {
		border-left: 3px solid blueviolet;
	}

	.media-title {
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

	.speakers {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
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

	.btn-download {
		display: flex;
		align-items: center;
		border-radius: 5px;
		border: none;
		background-color: transparent;
		height: 24px;

		&:hover {
			color: white;
			background-color: #0077FF;
		}
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

		img {
			height: 85%;
		}
	}

	@media (prefers-color-scheme: light) {
		.detail, .playlist {
			background-color: #fff;
		}

		#current-media-info, #playlist-title {
			background-color: #fdfdfd;
		}

		.objectives {
			color: #545454;
			background-color: #fdfdfd;
		}

		.playlist-item {
			background-color: #fff;
		}

		.playlist-item.selected,
		.playlist-item:hover {
			background-color: #d1d1d1;
		}

		.playlist-item.selected {
			border-left: 3px solid blueviolet;
		}
	}
</style>
