<script lang="ts">
	import Person from "$lib/Person.svelte";

	export let speakers: any;
</script>

<div class="speakers" class:vertical={speakers.length > 2}>
	{#each speakers as speaker}
	<Person info={speaker} minimal={speakers.length > 2} />
	{/each}
</div>

<style>
	.speakers {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.speakers.vertical {
		flex-direction: column;
		gap: 0;
	}
</style>