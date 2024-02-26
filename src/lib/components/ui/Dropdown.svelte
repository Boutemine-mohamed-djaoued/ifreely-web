<script>
	export let title;
	export let options;
	let explore = false;
	const handleExploreClick = () => {
		explore = !explore;
	};
</script>

<div class="explore max-md:w-full rounded-md p-[0.5em] max-md:text-left">
	<button
		class="md:hover:text-accent"
		on:click={() => {
			handleExploreClick();
		}}
	>
		{title}
		<img class:rotate-180={explore} class="inline-block" src="/home/header/downArrow.svg" alt="" />
	</button>
	<div class:down={explore} class:up={!explore} class="dropdown md:mt-2 md:absolute">
		<div class="md:bg-white max-md:bg-off-white px-5 md:my-5 font-semibold rounded-lg md:shadow-xl">
			{#each options as option}
				<a class="block my-3" href={option.path}>{option.value}</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.explore .dropdown {
		display: grid;
		transition: grid-template-rows 0.5s ease;
	}
	.up {
		grid-template-rows: 0fr;
	}
	.explore:has(.down) button {
		@apply text-accent;
	}
	a:hover {
		@apply text-accent;
	}
	.dropdown > div {
		overflow: hidden;
	}
	@media (width > 787px) {
		.dropdown > div {
			transform: translateX(-1.25rem);
		}
	}
	.down {
		grid-template-rows: 1fr;
	}
</style>
