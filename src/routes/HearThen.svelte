<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css/navigation';
	import { Navigation } from 'swiper/modules';
	let ratings = [
		{
			name: 'Michael Angelo | Marketing Director',
			stars: [1, 2, 3, 4, 5],
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: 'assets/home/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			stars: [1, 2, 3, 4],
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: 'assets/home/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			stars: [1, 2, 3],
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: 'assets/home/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			stars: [1, 2],
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: 'assets/home/profileImg.png'
		},
		{
			name: 'Michael Angelo | Marketing Director',
			stars: [1],
			comment:
				"As a marketing leader, I've found [Platform Name] to be a game-changer. The user-friendly interface, diverse talent pool, and transparent payment system have streamlined our project workflows. The emphasis on community and networking adds immense value, creating a collaborative environment",
			profileImg: 'assets/home/profileImg.png'
		}
	];
	onMount(() => {
		let swiper2 = new Swiper('.swiper-container-2', {
			modules: [Navigation],
			direction: 'horizontal',
			slidesPerView: 1,
			spaceBetween: 40,
			breakpoints: {
				767: {
					speed: 1000
				}
			},
			speed: 500,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<section class="pt-5 md:pt-10 pb-20 md:pb-32 relative">
	<h1 class="text-500 md:text-700 bg-off-white relative z-10 font-bold mb-5 md:mb-10 w-fit">
		Hear it from them!
	</h1>
	<div class="swiper swiper-container-2 md:px-10">
		<div class="swiper-wrapper">
			{#if ratings}
				{#each ratings as rating}
					<div
						class="swiper-slide "
					>
						<div class="bg-gray-100 grid gap-x-3 md:gap-x-6 max-lg:gap-y-6 p-5 rounded-lg">
							<div class="profile-img max-md:min-w-[5rem] lg:row-start-1 lg:row-end-3">
								<img src={rating.profileImg} alt="profile img" loading="lazy" />
							</div>
							<div>
								<div class="name font-bold text-400 sm:text-600 text-gray-400 text-opacity-40">
									{rating.name}
								</div>
								<div class="rating flex gap-2">
									{#if rating.stars}
										{#each rating.stars as star}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="27"
												height="26"
												viewBox="0 0 27 26"
												fill="none"
											>
												<path
													d="M13.6305 20.6825L13.5 20.6027L13.3695 20.6825L5.53408 25.4762L7.61463 16.4361L7.64811 16.2906L7.53596 16.1921L0.605349 10.1062L9.72792 9.32171L9.87875 9.30874L9.93715 9.16907L13.5 0.648069L17.0629 9.16907L17.1213 9.30874L17.2721 9.32171L26.3946 10.1062L19.464 16.1921L19.3519 16.2906L19.3854 16.4361L21.4659 25.4762L13.6305 20.6825Z"
													fill="#FFFD54"
													stroke="#181818"
													stroke-width="0.5"
												/>
											</svg>
										{/each}
									{/if}
								</div>
							</div>
							<div class="comment text-300 md:text-400 max-lg:col-start-1 max-lg:col-end-3">
								{rating.comment}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="swiper-button-next  !md:w-[3rem] !-right-4 !md:-right-10">
		<img src="assets/home/Next page.png" alt="next card" />
	</div>
	<div class="swiper-button-prev rotate-180 !md:w-[3rem] !-left-4 !md:-left-10">
		<img src="assets/home/Next page.png" alt="next card" />
	</div>
</section>

<style>
	.swiper-button-next::after , .swiper-button-prev::after {
		content: '';
	}
	.swiper-slide > div{
		grid-template-columns: 1fr 4fr;
	}
	@media (max-width: 767px) {
		.swiper-slide > div{
			grid-template-columns: 1fr 4fr;
			grid-template-rows: auto;
		}
	}
</style>
