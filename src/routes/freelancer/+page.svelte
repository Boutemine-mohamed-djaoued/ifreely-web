<script>
	import Feed from './components/Feed.svelte';
	import Filters from './components/Filters.svelte';
	import Searching from './components/Searching.svelte';
</script>

<Searching></Searching>
<div class="flex">
	<div class="max-md:w-full left-0 mt-10 md:w-[20rem] min-w-fit max-md:absolute max-md:hidden">
		<Filters></Filters>
	</div>
	<div>
		<Feed></Feed>
	</div>
</div>

<style>
</style>
