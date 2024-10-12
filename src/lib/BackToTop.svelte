<script>
	export let showOnPx = 150;
	let hidden = true;
	function goTop() {
		document.body.scrollIntoView();
	}
	function scrollContainer() {
		return document.documentElement || document.body;
	}
	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}
		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />
<button class="back-to-top" on:click={goTop} title="Back To Top" class:hidden>
	<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 15L12 10L7 15" stroke="#11d7f2" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</button>

<style>
	.back-to-top {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: white;
		font-size: 28px;
		border: none;
		border-radius: 5px;
		padding: 0.05rem;
		background-color: #2849ea;
		cursor: pointer;
		min-width: 40px;
		max-width: 40px;
		min-height: 40px;
		max-height: 40px;
	}
	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
