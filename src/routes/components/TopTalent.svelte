<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { Navigation } from 'swiper/modules';
	let topTalents = [
		{
			profileImg: 'home/topTalent/profileImg2.png',
			name: 'Michael Scofield',
			bio: "Web Developer 🚀 | Turning ideas into interactive websites 💻 | Coding wizard with HTML, CSS, and JavaScript ⚡ | Crafting digital experiences that stand out! 🎨 | Let's build something amazing together!",
			pr1: 'home/topTalent/pr1.png',
			pr2: 'home/topTalent/pr2.png',
			pr3: 'home/topTalent/pr3.png',
			pr4: 'home/topTalent/pr4.png'
		},
		{
			profileImg: 'home/topTalent/profileImg3.jpg',
			name: 'Alex Swift',
			bio: 'UI/UX virtuoso renowned for weaving digital wonders. With a meticulous blend of precision, creative flair, and an unwavering commitment to user delight, Alex navigates the design realm, shaping immersive and intuitive experiences. His expertise extends beyond aesthetics, delving into the very essence of user interaction. In collaboration with cross-functional teams, Alex not only envisions but materializes concepts that resonate with users, setting a benchmark for exceptional design. Welcome to the world of Alex Swift, where innovation meets elegance in the ever-evolving landscape of UI/UX design. 🌐✨',
			pr1: 'home/topTalent/pr3.1.png',
			pr2: 'home/topTalent/pr1.1.png',
			pr3: 'home/topTalent/pr2.1.png',
			pr4: 'home/topTalent/pr4.1.png'
		}
	];
	let swipers = [];
	onMount(() => {
		for (let i = 1; i <= 6; i++) {
			swipers[i] = new Swiper(`.swiper-container-${i}`, {
				modules: [Navigation],
				effect: 'fade',
				crossFade: 'true',
				direction: 'horizontal',
				spaceBetween: 40,
				allowTouchMove: false,
				speed: 1000,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next-talent',
					prevEl: '.swiper-button-prev-talent'
				}
			});
			// Handle keyboard events for the next and pre button

			var prevButton = document.querySelector('.swiper-button-prev-talent');
			var nextButton = document.querySelector('.swiper-button-next-talent');

			prevButton.addEventListener('keydown', function (event) {
				if (event.key === 'Enter') {
					swipers[i].slidePrev();
				}
			});

			nextButton.addEventListener('keydown', function (event) {
				if (event.key === 'Enter') {
					swipers[i].slideNext();
				}
			});
		}
	});
</script>

<section class="wrapper py-5 md:py-10 bg-gray-100 relative isolate overflow-x-clip">
	<h2 class="text-600 md:text-700 font-bold mb-2 md:mb-4">
		Top <span class="text-primary-300">Talent</span>&nbsp; :
	</h2>
	<div
		class="grid-layout justify-center mx-10 max-lg:flex max-md:gap-3 max-md:mx-4 md:grid md:gap-3 xl:gap-5"
	>
		<div class="swiper swiper-container-1 w-full max-lg:flex-1 max-md:aspect-square">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide" style="background-image:url('{topTalent.profileImg}')"></div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="swiper swiper-container-2 max-lg:flex-1">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide bg-white rounded-xl">
							<div class="inline-size bg-white h-full rounded-xl p-2 md:p-4 bg-opacity-90">
								<h3 class="font-bold text-[8cqi] text-center">
									{topTalent.name}
								</h3>
								<p class="text-[8cqi] 2xl:text-400 truncate-text">{topTalent.bio}</p>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="swiper swiper-container-3">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide" style="background-image:url('{topTalent.pr1}')"></div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="swiper swiper-container-4">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide" style="background-image:url('{topTalent.pr2}')"></div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="swiper swiper-container-5">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide" style="background-image:url('{topTalent.pr3}')"></div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="swiper swiper-container-6">
			<div class="swiper-wrapper">
				{#if topTalents}
					{#each topTalents as topTalent}
						<div class="swiper-slide" style="background-image:url('{topTalent.pr4}')"></div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="work max-md:hidden my-auto font-bold text-white text-500 xl:text-600 text-nowrap">
			<div class="w-fit rotate-90 bg-black py-3 md:px-20 xl:px-28 relative md:right-24 xl:right-36">
				My <span class="text-primary-300">work</span>
			</div>
		</div>
	</div>
	<div
		class="swiper-button-prev-talent absolute max-md:translate-y-[-6.2vw] top-[50%] md:top-[46%] -left-[3vw] rotate-180"
	>
		<img class="max-md:w-5" src="home/topTalent/arrow.svg" alt="" />
	</div>
	<div
		class="swiper-button-next-talent absolute max-md:translate-y-[-6.2vw] top-[50%] md:top-[46%] -right-[3vw]"
	>
		<img class="max-md:w-5" src="home/topTalent/arrow.svg" alt="" />
	</div>
	<button
		class="mx-auto mt-5 md:my-5 text-center w-[min(45vw,50rem)] text-300 sm:text-500 xl:text-600 font-bold py-2 lg:py-3 text-white bg-off-black"
	>
		Contact <span class="text-primary-300">Michael</span> !
	</button>
</section>

<style>
	.grid-layout > div:nth-child(n + 3) {
		@apply max-md:hidden;
	}
	.grid-layout > div {
		@apply w-full rounded-2xl;
	}
	.grid-layout .swiper-slide {
		@apply bg-no-repeat bg-cover bg-center bg-gray-200;
	}
	section::after {
		content: '';
		z-index: -1;
		width: 100vw;
		height: clamp(4rem, 10vw, 9rem);
		position: absolute;
		left: 0;
		top: 45%;
		transform: translateY(-6.2vw);
		@apply bg-off-black;
	}
	section::before {
		content: '';
		z-index: -1;
		height: 100vh;
		width: clamp(5rem, 10vw, 9rem);
		position: absolute;
		left: 50%;
		top: -100vh;
		transform: translateX(-50%);
		@apply bg-gray-100 md:hidden;
	}
	.work > div {
		box-shadow: 0 0 15px 10px #ffffff45;
	}
	.inline-size {
		container-type: inline-size;
	}
	@media (min-width: 768px) {
		.grid-layout {
			aspect-ratio: 3/1;
			grid-template-columns: 26% 39% 22% 7%;
			grid-template-rows: 59% 12% 20% 47%;
		}
		section::after {
			top: 40%;
			transform: translateY(0);
		}
	}
	.truncate-text {
		display: -webkit-box;
		-webkit-line-clamp: 7;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.swiper-container-1 {
		grid-column: 1;
		grid-row: 1 / span 2;
	}
	.swiper-container-2 {
		grid-column: 1;
		grid-row: 3 / span 2;
	}
	.swiper-container-3 {
		grid-column: 2 / span 2;
		grid-row: 1;
	}
	.swiper-container-4 {
		grid-column: 2;
		grid-row: 2 / span 2;
	}
	.swiper-container-5 {
		grid-column: 2;
		grid-row: 4;
	}
	.swiper-container-6 {
		grid-column: 3;
		grid-row: 2 / span 3;
	}
	.work {
		grid-column: 4;
		grid-row: 1 / span 4;
	}
	/* animations */
	.grid-layout > * {
		position: relative;
	}
	.swiper-container-1 {
		animation: swiper-x-back linear;
		animation-timeline: view(calc(100vh + 2rem) 20px);
	}
	.swiper-container-2 {
		animation: swiper-x-back linear;
		animation-timeline: view(calc(100vh + 2rem) 20px);
	}
	.swiper-container-3 {
		animation: swiper-y linear;
		animation-timeline: view(calc(100vh + 1rem) 20px);
	}
	.swiper-container-4 {
		animation: swiper-y linear;
		animation-timeline: view(calc(100vh + 1rem) 20px);
	}
	.swiper-container-5 {
		animation: swiper-y linear;
		animation-timeline: view(calc(100vh + 1rem) 20px);
	}
	.swiper-container-6 {
		animation: swiper-x-forward linear;
		animation-timeline: view(calc(100vh + 1rem) 20px);
	}
	@keyframes swiper-y {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes swiper-x-back {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		20% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes swiper-x-forward {
		from {
			opacity: 0;
			transform: translateX(100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
