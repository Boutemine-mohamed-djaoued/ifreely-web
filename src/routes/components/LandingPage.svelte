<script>
</script>

<section class="wrapper max-md:overflow-x-clip relative z-10">
	<div
		class="pb-5 max-md:mt-12 md:flex justify-between items-center md:min-h-[35rem] xl:min-h-[75vh]"
	>
		<div class="text">
			<h1
				class="text-nowrap max-md:w-fit max-md:mx-auto max-md:text-center font-semibold my-5 text-600 lg:text-700 relative isolate"
			>
				Turn ideas into <span class="text-primary-300">reality</span>
				<img
					class="gear md:hidden absolute -top-10 -right-10"
					src="home/landingPage/Gear.svg"
					alt=""
				/>
				<img
					class="play md:hidden absolute -top-20 -left-8"
					src="home/landingPage/play.svg"
					alt=""
				/>
			</h1>
			<p
				class="text-400 lg:text-500 max-w-[30ch] max-md:text-center max-md:mx-auto my-4 text-balance"
			>
				Discover the best freelancers and contact them through
			</p>
			<div
				class="input max-md:mx-auto my-5 rounded-md overflow-clip ring-1 md:ring-2 ring-black flex w-[min(80%,18rem)] lg:w-[max(65%,18rem)]"
			>
				<input
					class="text-300 lg:text-400 w-[100%] border-none"
					type="text"
					placeholder="search for a service"
				/>
				<button class="icon w-[20%] bg-primary-300 grid justify-center p-2 lg:p-3">
					<img src="/general/magnifier.svg" alt="" />
				</button>
			</div>
			<div class="md:translate-y-12 max-md:mx-auto w-fit relative my-5">
				<a
					href="/"
					class="text-300 md:text-400 px-[1em] py-[0.5em] focus-visible:outline-primary-300 bg-off-black text-white rounded-md font-semibold"
				>
					Become a <span class="text-primary-300">freelancer</span></a
				>
				<img
					class="tags md:hidden absolute -left-20 bottom-3"
					src="home/landingPage/tags.svg"
					alt=""
				/>
			</div>
		</div>
		<div
			class="img max-md:hidden bg-no-repeat bg-cover aspect-[699/550] w-[clamp(20rem,55vw,50rem)]"
			style="background-image:url('home/landingPage/landingImage2-lowres.webp')"
		>
			<img class="w-full" src="home/landingPage/landingImage2.webp" alt="laptop ilustration" />
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
