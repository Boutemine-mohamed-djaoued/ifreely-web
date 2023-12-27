<script>
</script>

<section class="wrapper max-md:overflow-x-clip">
	<div class="pb-5 max-md:mt-12 md:flex justify-between items-center md:min-h-[50vh]">
		<div class="text">
			<h1
				class="text-nowrap max-md:w-fit max-md:mx-auto max-md:text-center font-semibold my-5 text-600 lg:text-700 relative isolate"
			>
				Turn ideas into <span class="text-accent">reality</span>
				<img
					class="gear md:hidden absolute -top-10 -right-10"
					src="assets/home/Gear.png"
					alt="gear"
				/>
				<img
					class="play md:hidden absolute -top-20 -left-8"
					src="assets/home/play.png"
					alt="play button"
				/>
			</h1>
			<p
				class="text-400 lg:text-500 max-w-[30ch] max-md:text-center max-md:mx-auto my-4 text-balance"
			>
				Discover the best freelancers and contact them through
			</p>
			<div
				class="input max-md:mx-auto my-5 rounded-md overflow-clip ring-2 ring-black flex w-[min(80%,18rem)] lg:w-[max(65%,18rem)]"
			>
				<input
					class="text-300 lg:text-400 w-[100%] border-none"
					type="text"
					placeholder="search for a service"
				/>
				<button class="icon w-[20%] bg-accent grid justify-center p-2 lg:p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
					>
						<path
							d="M18.0612 15.7649H16.932L16.5318 15.379C17.9326 13.7495 18.7759 11.634 18.7759 9.33268C18.7759 4.20118 14.6164 0.0416565 9.48487 0.0416565C4.35337 0.0416565 0.193848 4.20118 0.193848 9.33268C0.193848 14.4642 4.35337 18.6237 9.48487 18.6237C11.7862 18.6237 13.9017 17.7804 15.5312 16.3796L15.9171 16.7798V17.909L23.0641 25.0417L25.1938 22.9119L18.0612 15.7649ZM9.48487 15.7649C5.92569 15.7649 3.05262 12.8919 3.05262 9.33268C3.05262 5.7735 5.92569 2.90043 9.48487 2.90043C13.044 2.90043 15.9171 5.7735 15.9171 9.33268C15.9171 12.8919 13.044 15.7649 9.48487 15.7649Z"
							fill="white"
						/>
					</svg>
				</button>
			</div>
			<div class="md:translate-y-12 max-md:mx-auto w-fit relative my-5">
				<a
					href="/"
					class="text-300 md:text-400 px-[1em] py-[0.5em] focus-visible:outline-accent bg-black text-white rounded-md font-medium"
				>
					Become a <span class="text-accent">freelancer</span></a
				>
				<img
					class="tags md:hidden absolute -left-20 bottom-3"
					src="assets/home/tags.png"
					alt="tags"
				/>
			</div>
		</div>
		<div class="img max-md:hidden">
			<img
				class="w-[clamp(20rem,55vw,50rem)]"
				src="assets/home/landingImage.png"
				alt="laptop ilustration"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<style>
	.gear,
	.play {
		z-index: -1;
	}
	.gear {
		animation: float 2.5s infinite alternate ease-in-out;
	}
	.play {
		animation: float 2.5s 0.5s infinite alternate ease-in-out;
	}
	.tags {
		animation: float 2.5s 0.25s infinite alternate ease-in-out;
	}

	@keyframes float {
		from {
			transform: translateY(5px);
		}
		to {
			transform: translateY(-5px);
		}
	}
</style>
