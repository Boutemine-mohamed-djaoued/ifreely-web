<script>
	import { showDetails, showFilters } from './../../lib/stores/FeedState.js';
	import Apply from './components/Apply.svelte';
	import Details from './components/Details.svelte';
	import Feed from './components/Feed.svelte';
	import Filters from './components/Filters.svelte';
	import Searching from './components/Searching.svelte';
</script>

<div></div>
<Searching></Searching>
<div class="flex">
	<div
		class:hide-filters={!$showFilters}
		class="filters max-md:w-full left-0 md:w-[20rem] min-w-fit max-md:absolute"
	>
		<Filters></Filters>
	</div>
	<div>
		<Feed></Feed>
	</div>
</div>

<div
	class:off-screen-right={$showDetails === 0}
	class:in-screen-right={$showDetails === 1}
	class:in-screen-left={$showDetails === 2}
	class="details bg-white absolute h-[100vh] z-[99999] full-width"
>
	<div class="md:flex overflow-y-scroll h-[100vh]">
		<div>
			<Details></Details>
		</div>
		<div class="flex-1">
			<Apply></Apply>
		</div>
	</div>
</div>

<style>
	.details,
	.filters {
		transition: transform 1s ease;
	}

	@media (width < 768px) {
		.filters {
			overflow-y: scroll;
			top: 4rem;
			height: calc(100vh - 4rem);
		}
		.hide-filters {
			transform: translateX(-100%);
		}
	}
	.in-screen-right {
		transform: translateX(calc(100vw - 100%));
	}
	.off-screen-right {
		transform: translateX(100vw);
	}
	.in-screen-left {
		transform: translateX(0);
	}
</style>
