<script lang="ts">
	import SessionCard from '$lib/SessionCard.svelte';
	import { getFriendlyDate, normalizeString } from '$lib/Constants.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';
	import BackToTop from '$lib/BackToTop.svelte';
	import { filterOptions } from '../stores';

	let searchInput: HTMLInputElement;

	const logoUrl = `${base}/jfr_2024.png`;

	const FETCH_LIMIT = 25;

	let loading = true;
	let timeout: ReturnType<typeof setTimeout>;

	let showClearSearch: boolean;
	let sortAlphabetically: boolean;
	let onlyVideos: boolean;
	let selectedDate: string = '';

	let eventJson: any;
	let sessionsByDate: any = {};
	let filteredSessions: any;
	let displaySessions: any;

	const debounce = (callback: Function, wait = 300) => {
		return (...args: any[]) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => callback(...args), wait);
		};
	};

	const searchSessions = async (value: string) => {
		// console.log('Searching for: ', value);
		loading = true;

		// await new Promise(r => setTimeout(r, 3000));

		const scopedSessions = sessionsByDate[selectedDate];
		if (onlyVideos) {
			filteredSessions = value
				? scopedSessions.filter((x: any) => x.picture &&
						normalizeString(x.title).toUpperCase().includes(normalizeString(value).toUpperCase())
				  )
				: scopedSessions.filter((x: any) => x.picture);
		} else {
			filteredSessions = value
				? scopedSessions.filter((x: any) =>
						normalizeString(x.title).toUpperCase().includes(normalizeString(value).toUpperCase())
				  )
				: scopedSessions;
		}

		if (sortAlphabetically) {
			filteredSessions = filteredSessions.toSorted((a: any, b: any) => a.title.localeCompare(b.title));
		}

		displaySessions = filteredSessions.slice(0, FETCH_LIMIT);

		loading = false;

		$filterOptions = {
			filterKeyword: searchInput.value,
			sortAlphabetically: sortAlphabetically,
			onlyVideos: onlyVideos,
			selectedDate: selectedDate,
		}
	};

	const onSearch = async () => {
		showClearSearch = searchInput.value?.length > 0;
		loading = true;
		debounce(searchSessions).call(null, searchInput.value);
	};

	const onDeleteSearch = () => {
		if (searchInput.value) {
			searchInput.value = '';
			onSearch();
		}
	};

	const onDateChange = async (date: string) => {
		selectedDate = date;
		await searchSessions(searchInput.value);
	};

	const loadMore = () => {
		// console.log('Loading more...');

		if (filteredSessions) {
			for (let index = 0; index < FETCH_LIMIT; index++) {
				if (filteredSessions.length == displaySessions.length) {
					break;
				}

				displaySessions = [...displaySessions, filteredSessions[displaySessions.length]];
			}
		}

		// console.log('Display count: ' + displaySessions.length);
	};

	const onScroll = () => {
		const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

		if (window.scrollY >= scrollableHeight) {
			loadMore();
		}
	};

	onMount(async () => {
		searchInput.value = $filterOptions.filterKeyword;
		showClearSearch = searchInput.value?.length > 0;
		sortAlphabetically = $filterOptions.sortAlphabetically;
		onlyVideos = $filterOptions.onlyVideos;
		selectedDate = $filterOptions.selectedDate;

		const response = await fetch(`${base}/json/event.json`);
		eventJson = await response.json();

		const allRealItems = eventJson.data.event.search.items.filter((x: any) => !x.title.startsWith('Session test'));

		sessionsByDate[''] = allRealItems;
		allRealItems.forEach((item: any) => {
			const startDate = item.start.split('T')[0];
			if (!sessionsByDate[startDate]) {
				sessionsByDate[startDate] = [];
			}
			sessionsByDate[startDate].push(item);
		});

		document.addEventListener('scroll', onScroll);

		await searchSessions(searchInput.value);
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('scroll', onScroll);
		}
	});
</script>

<svelte:head>
	<title>JFR 2024</title>
</svelte:head>

<main>
	<div class="sticky-top" id="top-header">
		<div>
			<img src={logoUrl} class="logo" alt="JFR 2024" />
		</div>
		<div id="filter-row">
			<div id="search-container">
				<input
					id="search"
					type="search"
					placeholder="Que recherchez-vous ?"
					bind:this={searchInput}
					on:input={onSearch}
				/>
			</div>
			<div id="search-options">
				<button type="button" title="Tri A-Z" class:active={sortAlphabetically} on:click="{() => {sortAlphabetically = !sortAlphabetically; onSearch()}}">
					<svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.22 15.97L9 17.19V5C9 4.59 8.66 4.25 8.25 4.25C7.84 4.25 7.5 4.59 7.5 5V17.19L6.28 15.97C5.99 15.68 5.51 15.68 5.22 15.97C4.93 16.26 4.93 16.74 5.22 17.03L7.72 19.53C7.79 19.6 7.87 19.65 7.96 19.69C8.05 19.73 8.15 19.75 8.25 19.75C8.35 19.75 8.45 19.73 8.54 19.69C8.63 19.65 8.71 19.6 8.78 19.53L11.28 17.03C11.57 16.74 11.57 16.26 11.28 15.97C10.99 15.68 10.51 15.68 10.22 15.97Z" fill="currentColor"></path> <path d="M14 11.21C14.39 11.35 14.82 11.15 14.96 10.76L15.24 9.98001H17.27L17.55 10.76C17.66 11.07 17.95 11.26 18.26 11.26C18.34 11.26 18.43 11.25 18.51 11.22C18.9 11.08 19.1 10.65 18.96 10.26L17.25 5.47001C17.08 5.04001 16.69 4.76001 16.25 4.76001C15.81 4.76001 15.42 5.04001 15.25 5.49001L13.55 10.26C13.41 10.65 13.61 11.08 14 11.22V11.21ZM16.73 8.48001H15.77L16.25 7.14001L16.73 8.48001Z" fill="currentColor"></path> <path d="M18.67 13.46C18.48 13.02 18.08 12.75 17.62 12.75H14.51C14.1 12.75 13.76 13.09 13.76 13.5C13.76 13.91 14.1 14.25 14.51 14.25H16.9L14.07 17.2C13.73 17.56 13.64 18.08 13.83 18.54C14.02 18.98 14.42 19.25 14.88 19.25H18.01C18.42 19.25 18.76 18.91 18.76 18.5C18.76 18.09 18.42 17.75 18.01 17.75H15.62L18.44 14.82C18.78 14.46 18.88 13.93 18.68 13.47L18.67 13.46Z" fill="currentColor"></path> </g></svg>
					<span>Tri A-Z</span>
				</button>
				<button type="button" title="Vidéos uniquement" class:active={onlyVideos} on:click="{() => {onlyVideos = !onlyVideos; onSearch()}}">
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="currentColor"/>
						<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="currentColor"/>
						</svg>
						<span>Vidéos uniquement</span>
				</button>
			</div>
		</div>

		<nav class="navbar">
			<ul class="menu">
				{#each Object.keys(sessionsByDate) as date}
				<li class={selectedDate == date ? 'selected' : ''}>
					<a href="/" on:click|preventDefault={() => onDateChange(date)}>{date ? getFriendlyDate(date) : 'Tout'}</a>
				</li>
				{/each}
			</ul>
		</nav>
	</div>

	{#if loading}
		<div class="DNA_cont">
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
			<div class="nucleobase" />
		</div>
	{/if}

	<div class="card-container">
		{#if !loading}
			{#if displaySessions && displaySessions.length > 0}
				{#each displaySessions as item}
					<SessionCard info={item} />
				{/each}
			{:else}
				<p>Aucun résultat</p>
			{/if}
		{/if}
	</div>

	<BackToTop />
</main>

<style>
	main {
		width: 100%;
	}

	#top-header {
		width: 100%;
		text-align: center;
		padding-top: 0.5rem;
		padding-bottom: 0.1rem;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		box-shadow: 0 8px 6px -10px black;
	}

	.logo {
		height: 6em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	#filter-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		user-select: none;
		flex-wrap: wrap;
		margin-top: 0.5rem;
	}

	#search-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#search {
		height: 38px;
		padding: 6px 12px;
		padding-left: 2.25em;
		font-size: 16px;
		min-width: 300px;
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2IzYjNiMyIgZD0ibTE3LjYzMiAxNi45NTUtNC43NjEtNC43NjJhNi42MTQgNi42MTQgMCAwIDAgMS43OTUtNC41MjcgNi42NTYgNi42NTYgMCAwIDAtNi42NDktNi42NDkgNi42NTUgNi42NTUgMCAwIDAtNi42NDkgNi42NDggNi42NTQgNi42NTQgMCAwIDAgNi42NDkgNi42NDcgNi42MTMgNi42MTMgMCAwIDAgMy43NS0xLjE2NGw0LjgzNCA0LjgzNCAxLjAzMS0xLjAyN3pNMi44MjQgNy42NjZhNS4xOTggNS4xOTggMCAwIDEgNS4xOTItNS4xOTIgNS4xOTcgNS4xOTcgMCAwIDEgNS4xOTIgNS4xOTIgNS4xOTggNS4xOTggMCAwIDEtNS4xOTIgNS4xOTEgNS4yIDUuMiAwIDAgMS01LjE5Mi01LjE5MXoiLz48L3N2Zz4=);
		background-position: .65em;
		background-repeat: no-repeat;
		background-size: auto 47.5%;
		border: 1px solid #858585;
		outline: none;
		border-radius: 6px;
		background-color: #1b1b1b;
	}

	#search::placeholder {
		color: #b3b3b3;
	}

	#search-options {
		display: flex;
		gap: 10px;
	}

	#search-options button {
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 38px;
		padding: 10px 10px 10px 2px;
		border-radius: 6px;
		outline: none;
		border: none;
		cursor: pointer;
		font-size: 14px;
		background-color: #1b1b1b;
		border: 1px solid #858585;
	}

	#search-options button:nth-child(2) {
		padding-left: 5px;
		gap: 5px;
	}

	#search-options button.active {
		background-color: #11d7f2;
		color: #1C274C;
	}

	.navbar {
		background-color: #2849ea;
		color: #ffffff;
		border-radius: 6px;
		max-width: 820px;
		margin: auto;
	}

	.navbar .menu {
		display: flex;
		padding: 0;
	}

	.navbar .menu li {
		flex: 1;
		display: flex;
		text-align: center;
		align-items: center;
		transition: background-color 0.5s ease;
	}

	.navbar .menu li:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.navbar .menu li:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.navbar .menu a {
		flex: 1;
		justify-content: center;
		display: inline-flex;
		color: #ffffff;
		text-decoration: none;
		padding: 15px;
		position: relative;
	}

	.navbar .menu li:hover,
	.navbar .menu li.selected {
		background-color: #11d7f2;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 80%;
		min-width: 80%;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	@media (prefers-color-scheme: light) {
		#search {
			background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iIzY2NiIgZD0ibTE3LjYzMiAxNi45NTUtNC43NjEtNC43NjJhNi42MTQgNi42MTQgMCAwIDAgMS43OTUtNC41MjcgNi42NTYgNi42NTYgMCAwIDAtNi42NDktNi42NDkgNi42NTUgNi42NTUgMCAwIDAtNi42NDkgNi42NDggNi42NTQgNi42NTQgMCAwIDAgNi42NDkgNi42NDcgNi42MTMgNi42MTMgMCAwIDAgMy43NS0xLjE2NGw0LjgzNCA0LjgzNCAxLjAzMS0xLjAyN3pNMi44MjQgNy42NjZhNS4xOTggNS4xOTggMCAwIDEgNS4xOTItNS4xOTIgNS4xOTcgNS4xOTcgMCAwIDEgNS4xOTIgNS4xOTIgNS4xOTggNS4xOTggMCAwIDEtNS4xOTIgNS4xOTEgNS4yIDUuMiAwIDAgMS01LjE5Mi01LjE5MXoiLz48L3N2Zz4=);
			background-color: #fff;
		}

		#search::placeholder {
			color: #666;
		}

		#search-options button {
			background-color: #fff;
			border: none;
		}
	}

	@media (max-width: 1000px) {
		.card-container {
			max-width: 100%;
			padding: 1rem;
		}

		#top-header {
			padding-top: 0.5rem;
			padding-bottom: 0.1rem;
			padding-left: 1rem;
			padding-right: 1rem;
			width: unset;
		}
	}

	@media (max-width: 600px) {
		#search-container {
			width: 100%;
			flex: 1;
		}

		.navbar {
			font-size: 90%;
		}

		.navbar .menu a {
			padding: 7px;
		}

		#search {
			width: 100%;
		}
	}
</style>
