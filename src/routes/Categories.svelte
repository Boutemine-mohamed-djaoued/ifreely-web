<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';
	let categories = [
		{ title: 'Web design', url: 'assets/home/web.png' },
		{ title: 'Voice acting', url: 'assets/home/voice.png' },
		{ title: 'Graphic design', url: 'assets/home/graphics.png' },
		{ title: 'Content writing', url: 'assets/home/writing.png' },
		{ title: 'Web design', url: 'assets/home/web.png' },
		{ title: 'Voice acting', url: 'assets/home/voice.png' },
		{ title: 'Graphic design', url: 'assets/home/graphics.png' },
		{ title: 'Content writing', url: 'assets/home/writing.png' }
	];
	onMount(() => {
		let swiper7 = new Swiper('.swiper-container-categories', {
			modules: [Navigation],
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1.4,
			spaceBetween: -40,
			breakpoints: {
				370: {
					slidesPerView: 1.6,
					spaceBetween: -30
				},
				640: {
					slidesPerView: 2,
					spaceBetween: -80
				},
				767: {
					slidesPerView: 3,
					spaceBetween: -10
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: -10
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<section class="wrapper relative isolate overflow-x-clip max-sm:after:hidden max-md:before:hidden min-h-[25rem]">
	<div class="full-width2 py-5 md:py-20">
		<h2 class="max-md:ml-[clamp(0.5rem,5vw,2rem)] text-600 md:text-700 font-bold mb-2 md:mb-5">Categories</h2>
		<div class="swiper swiper-container-categories md:w-full">
			<div class="swiper-wrapper">
				{#if categories}
					{#each categories as categorie}
						<div class="swiper-slide p-5">
							<h3 class="text-400 font-bold text-center leading-3 z-10 relative">
								{categorie.title}
							</h3>
							<img
								class="mx-auto max-md:max-h-[15rem] shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg relative  bg-gray-200"
								src={categorie.url}
								alt="{categorie.title} illustration image"
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div
		class="!text-white translate-x-8 translate-y-5 2xl:translate-x-16 xl:translate-y-7 swiper-button-next"
	></div>
	<div
		class="!text-white -translate-x-8 translate-y-5 2xl:-translate-x-16 xl:translate-y-7 swiper-button-prev"
	></div>
</section>

<style>
	.full-width2 {
		grid-column: full-width;
	}
	@media (max-width: 640px) {
		.swiper-button-next::after,
		.swiper-button-prev::after {
			content: '';
		}
	}
	@media (min-width: 767px) {
		.full-width2 {
			grid-column: content;
		}
	}
	/* horisontal black bar */
	section::after {
		content: '';
		z-index: -1;
		width: 100vw;
		height: clamp(6rem, 10vw, 9rem);
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-30%);
		@apply bg-off-black;
	}
	/* verticale black bar */
	section::before {
		content: '';
		z-index: -1;
		height: 1000vh;
		width: clamp(6rem, 10vw, 9rem);
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 50%;
		@apply bg-off-black;
	}
</style>
