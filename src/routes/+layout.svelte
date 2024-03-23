<script>
	import { showDetails } from './../lib/stores/FeedState.js';
	// global styles
	import '../app.css';
</script>

<button
	on:click={() => showDetails.set(0)}
	class:hidden={$showDetails === 0}
	class="shade absolute bg-black bg-opacity-20 w-[100vw] h-[100vh] left-0 z-[99999]"
></button>
<div
	class:h-[100vh]={$showDetails === 1 || $showDetails === 2}
	class="freelancer relative grid-system overflow-clip"
>
	<slot />
</div>
