<script lang="ts">
	import { getTimeEmoji, sanitizeFilename } from './Constants.svelte';
	import Speakers from './Speakers.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let media: any;
	export let currentMedia: any = null;
	export let downloadable: boolean = false;
	export let showTime: boolean = true;

	const onClickMedia = (media: any) => {
		currentMedia = media;
		dispatch('onClickMedia', media);
	};

	const onDownload = (title: string, url: string) => {
		const anchor = document.createElement('a');
		anchor.href = url;

		const urlSplit = url.split('.');
		const fileExtension = '.' + urlSplit[urlSplit.length - 1];
		anchor.download = sanitizeFilename(title) + fileExtension;

		anchor.target = '_blank';

		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	};
</script>

<button
	title={media.title}
	class="media-item"
	class:selected={media == currentMedia}
	on:click={() => onClickMedia(media)}
	on:keydown={(e) => e.key === 'Enter' && onClickMedia(media)}
	tabindex="0"
>
	<div class="thumbnail-container">
		<img class="thumbnail" src={media.thumbnail} alt={media.title} />
	</div>
	<div class="video-details">
		{#if media.sessionTitle}
		<div class="media-title media-session-title" style="color: {media.sessionTypeColor}">{media.sessionTitle}</div>
		{/if}
		<div class="media-title"><strong>{media.title}</strong></div>
		<div class="subtitle">
			{#if showTime}
			<span>{getTimeEmoji(media.start)} {media.start}</span>
			{/if}
			{#if downloadable}
				<button
					type="button"
					title="Télécharger"
					class="btn-download"
					on:click={() => onDownload(media.title, media.hdUrl ?? media.url)}
				>
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
			{/if}
		</div>
		{#if media.speakers}
			<Speakers speakers={media.speakers} optimizeSpace={true} />
		{/if}
	</div>
</button>

<style>
	button {
		all: unset;
		display: inline-block;
		text-align: initial;
	}

	.media-item:first-child {
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
	}

	.media-item:last-child {
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	.media-item {
		display: flex;
		gap: 10px;
		padding: 5px;
		cursor: pointer;
	}

	.media-item.selected,
	.media-item:hover {
		background-color: rgb(33, 36, 37);
	}

	.media-item.selected {
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

	.media-session-title {
		font-size: .75rem;
		font-weight: 700;
		text-transform: uppercase;
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

	img.thumbnail {
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
		img.thumbnail {
			height: 85%;
		}
	}

	@media (prefers-color-scheme: light) {
		.media-item {
			background-color: #fff;
		}

		.media-item.selected,
		.media-item:hover {
			background-color: #d1d1d1;
		}

		.media-item.selected {
			border-left: 3px solid blueviolet;
		}
	}
</style>
