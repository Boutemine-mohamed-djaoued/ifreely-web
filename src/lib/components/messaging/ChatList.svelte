<script>
	export let friends;
	import { chatState } from '$lib/stores/messeges.js';
	let current = 0;
	let handleClick = (value) => {
		current = value;
		chatState.set(true);
	};
</script>

<aside class="w-full  md:overflow-y-auto md:h-[100vh]">
	<div class="md:bg-white mt-5 md:p-5">
		<h2 class="md:text-600 font-semibold text-center my-3 md:my-5">Messages</h2>
		<div class="flex border-2 rounded-full px-4">
			<img src="/freelancer/header/search.svg" alt="" />
			<input
				class="border-none bg-[inherit] focus:ring-0 min-w-0"
				type="text"
				placeholder="search"
			/>
		</div>
	</div>
	<div class="md:bg-gray-100 py-2 md:py-5 md:mb-20">
		{#each friends as friend, i}
			<button
				on:click={() => handleClick(i)}
				class="flex items-center w-full my-3 py-1 md:px-5 md:rounded-xl hover:bg-gray-200 max-md:border-b-2"
				class:md:!bg-white={current == i}
			>
				<div
					class:after:!bg-light-green={friend.loged}
					class="profileImg m-2 ml-0 relative md:w-20"
				>
					<img src={friend.profileImg} alt="" />
				</div>
				<div class="w-full">
					<div class="flex justify-between mt-1">
						<p class="font-semibold">{friend.name}</p>
						<p class="text-gray-400">{friend.lastContact}</p>
					</div>
					<div class="flex justify-between items-center">
						<p class="text-gray-400">{friend.gigTitle}</p>
						{#if friend.notifications}
							<span
								class="bg-red-500 text-[0.7em] text-white font-semibold rounded-full grid items-center h-full w-4"
								>{friend.notifications}</span
							>
						{/if}
					</div>
					<div class="truncate-text-1 text-left w-fit mb-1 max-md:hidden">
						<span>{friend.lastSender} :</span>
						<span>{friend.lastMessage}</span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</aside>

<style>
	.profileImg::after {
		content: '';
		position: absolute;
		background-color: rgba(128, 128, 128, 0.536);
		border-radius: 50%;
		width: 10px;
		aspect-ratio: 1;
		top: 3px;
		left: 3px;
	}
	::-webkit-scrollbar {
		width: 0px; /* Remove scrollbar space */
		background: transparent; /* Optional: hide scrollbar gutter */
	}
</style>
