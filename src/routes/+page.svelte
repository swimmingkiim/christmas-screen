<script lang="ts">
	import '../app.css';

	$: title = '';
</script>

<div id="title-container">
	<textarea
		placeholder="Type here"
		class="textarea textarea-ghost {title.length > 0 ? `text-error` : ''}"
		bind:value={title}
	/>
</div>

<style lang="scss">
	#title-container {
		width: 100%;

		position: fixed;
		z-index: 100;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);

		display: flex;
		flex-direction: row;
		justify-content: center;

		textarea {
			width: 20em;
			max-width: 100% !important;
			padding: 1em 1.5em;
			font-size: 250%;
			text-align: center;

			resize: none;

			background-color: transparent;

			&:focus {
				background-color: #ffffff;
			}
		}
	}
</style>
