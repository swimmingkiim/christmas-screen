<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	/** @type {import('./$types').PageData} */
	export let data: PageData;
	export const prerender = true;

	$: title = '';
	$: showCopiedAlert = false;
	$: showEmptyAlert = false;

	const onCopyShareLink = async () => {
		if (title.length <= 0) {
			showEmptyAlert = true;
			setTimeout(() => {
				showEmptyAlert = false;
			}, 3000);
			return;
		}
		const host = import.meta.env.DEV ? 'http://localhost:5173' : 'https://swimmingkiim.github.io';
		const url = `${host}${base}?message=${title}`;
		await navigator.clipboard.writeText(url);
		showCopiedAlert = true;
		setTimeout(() => {
			showCopiedAlert = false;
		}, 3000);
	};

	onMount(() => {
		console.log(data);
		if (data.message) {
			title = data.message;
		}
	});
</script>

<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={onCopyShareLink}>Share</button>
<div id="title-container">
	<textarea
		placeholder="Type here"
		class="textarea textarea-ghost {title.length > 0 ? `text-error` : ''}"
		bind:value={title}
	/>
</div>
{#if showCopiedAlert}
	<div class="alert alert-success shadow-lg">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Link copied!</span>
		</div>
	</div>
{/if}
{#if showEmptyAlert}
	<div class="alert alert-error shadow-lg">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Please enter your message</span>
		</div>
	</div>
{/if}

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
	button {
		margin: 1em 1.5em;

		position: absolute;
		z-index: 101;
	}

	.alert {
		@apply w-[100%] md:w-[30%] lg:w-[60%];
		position: fixed;
		z-index: 102;
		bottom: 1em;
		@apply right-[0] md:right-[2.5%] lg:right-[5%];
	}
</style>
