<script lang="ts">
	import Person from "$lib/Person.svelte";
	import { onMount } from "svelte";

	export let speakers: any;
	export let optimizeSpace: boolean = false;

	let minimal: boolean;

	$: {
		minimal = optimizeSpace && speakers.length > 2;
	}
</script>

<div class="speakers" class:vertical={minimal}>
	{#each speakers as speaker}
	<Person info={speaker} minimal={minimal} />
	{/each}
</div>

<style>
	.speakers {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-top: 5px;
	}

	.speakers.vertical {
		flex-direction: column;
		gap: 0;
	}
</style>