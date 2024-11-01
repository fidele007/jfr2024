<script lang="ts">
	export let checked = false;
	export const color = '#646cff';
</script>

<div class="switch-container">
	<label class="switch" style="--switch-color: {color};">
		<input type="checkbox" bind:checked />
		<span class="slider" />
	</label>
	<span>Autoplay</span>
</div>

<style>
	.switch-container {
		display: flex;
		gap: 5px;
		align-items: center;
		font-weight: 700;
		font-size: 14px;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 45px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		/* background-color: #2196f3; */
		background-color: var(--switch-color);
	}

	input:checked + .slider {
		/* box-shadow: 0 0 1px #2196f3; */
		box-shadow: 0 0 1px var(--switch-color);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}
</style>
