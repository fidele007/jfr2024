<script lang="ts">
	import { getTimeEmoji, sanitizeFilename } from './Constants.svelte';
	import Speakers from './Speakers.svelte';

	export let media: any;
	export let downloadable: boolean;
	export let selected: boolean;

	const onClickMedia = (media: any) => {
		console.log('On click media', media);
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
	class="playlist-item"
	class:selected
	on:click={() => onClickMedia(media)}
	on:keydown={(e) => e.key === 'Enter' && onClickMedia(media)}
	tabindex="0"
>
	<div class="thumbnail-container">
		<img class="thumbnail" src={media.thumbnail} alt={media.title} />
	</div>
	<div class="video-details">
		<div class="media-title"><strong>{media.title}</strong></div>
		<div class="subtitle">
			<span>{getTimeEmoji(media.start)} {media.start}</span>
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
			<Speakers speakers={media.speakers} />
		{/if}
	</div>
</button>

<style>
</style>
