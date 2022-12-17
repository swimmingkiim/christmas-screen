<script lang="ts">
	import { onMount } from 'svelte';
	import Konva from 'konva';
	import ChristmasTree from 'src/components/ChristmasTree/ChristmasTree.svelte';
	import House from 'src/components/House/House.svelte';

	let width: number;
	let height: number;

	$: isFullScreen = false;

	const toggleFullScreen = () => {
		const fullScreenTarget: HTMLElement = document.body;
		if (!document.fullscreenElement) {
			if (fullScreenTarget.requestFullscreen) {
				isFullScreen = true;
				return fullScreenTarget.requestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				isFullScreen = false;
				return document.exitFullscreen();
			}
		}
	};

	onMount(() => {
		let stage = new Konva.Stage({
			container: 'container',
			width: width,
			height: height
		});

		let layer = new Konva.Layer();

		const createCircle = (x: number, y: number) => {
			const circle = new Konva.Circle({
				x,
				y,
				radius: 5,
				fill: '#ffffff'
			});
			circle.attrs['amplitude'] = getRandomNumberInRange(8, 5);
			circle.attrs['period'] = getRandomNumberInRange(5000, 3000);
			circle.attrs['multiplyBy'] = getRandomNumberInRange(100, 0) > 50 ? 1 : -1;
			return circle;
		};

		const getRandomNumberInRange = (max: number, min: number) =>
			Math.floor(Math.random() * (max - min + 1) + min);

		const randomCircles = Array(100)
			.fill(0)
			.map((_) => {
				return createCircle(getRandomNumberInRange(width, 0), getRandomNumberInRange(height, 0));
			});

		randomCircles.forEach((circle) => {
			layer.add(circle);
		});

		stage.add(layer);

		var anim = new Konva.Animation((frame) => {
			if (frame) {
				randomCircles.forEach((circle) => {
					circle.x(
						circle.attrs['multiplyBy'] *
							circle.attrs['amplitude'] *
							Math.sin((frame.time * 3 * Math.PI) / circle.attrs['period']) +
							circle.x()
					);
					if (circle.y() > height) {
						circle.y(0);
					} else {
						circle.y(circle.y() + getRandomNumberInRange(5, 1));
					}
				});
			}
		}, layer);

		anim.start();
	});
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<main>
	<slot />
	<button
		id="full-screen-btn"
		class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
		on:click={toggleFullScreen}>{isFullScreen ? 'X' : 'Full Screen'}</button
	>
	<div id="container" />
	<div id="tree-container">
		<ChristmasTree />
	</div>
	<div id="houses-container">
		<House />
		<House />
		<House />
		<House />
	</div>
	<div id="sky" />
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;
	}
	#container {
		width: 100%;
		min-width: 1600px;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 2;
	}
	#tree-container {
		width: 500px;
		max-width: 90%;

		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	#houses-container {
		width: 100%;
		min-width: 1600px;
		height: 100%;
		min-height: 100vh;

		position: absolute;
		z-index: 0;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}
	#sky {
		width: 100%;
		height: 100%;
		background-color: black;

		position: fixed;
		top: 0;
		z-index: -1;
	}

	#full-screen-btn {
		position: absolute;
		top: 1em;
		right: 1.5em;
		z-index: 100;
	}
</style>