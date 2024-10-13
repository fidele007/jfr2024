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
				<div>
					<input type="checkbox" id="alphabetic-sort" bind:checked={sortAlphabetically} on:change={onSearch} />
					<label for="alphabetic-sort">Tri A-Z</label>
				</div>
				<div>
					<input type="checkbox" id="only-videos" bind:checked={onlyVideos} on:change={onSearch} />
					<label for="only-videos">Seulement avec média</label>
				</div>
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
		align-items: baseline;
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
		border-radius: 4px;
		background-color: #1b1b1b;
	}

	#search::placeholder {
		color: #b3b3b3;
	}

	#search-options {
		display: flex;
		gap: 10px;
	}

	#search-options > div {
		display: flex;
		align-items: center;
		gap: 3px;
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

		#search-container {
			flex: 1;
		}
	}

	@media (max-width: 500px) {
		.navbar {
			font-size: 90%;
		}

		.navbar .menu a {
			padding: 4px;
		}

		#search {
			width: 100%;
		}
	}
</style>
