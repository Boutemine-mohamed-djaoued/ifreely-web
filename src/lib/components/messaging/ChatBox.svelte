<script>
	export let user;
	import { messageStore, chatState } from '$lib/stores/messeges.js';
	import { onMount } from 'svelte';
	import Send from './Send.svelte';
	let container;
	onMount(() => {
		container = document.querySelector('.box');
		messageStore.subscribe((value) => {
			container = document.querySelector('.box');
			setTimeout(() => {
				container.scrollTop = container.scrollHeight;
			}, 0);
			messages = value;
		});
	});

	let messages = [];
	const seeTime = (e, i) => {
		if (e.target.parentNode.classList.contains('time')) return;
		const p = document.createElement('p');
		p.textContent = messages[i].time;
		if (messages[i].sender == 'you') p.classList.add('text-right');
		else {
			p.classList.add('ml-10');
			p.classList.add('md:ml-16');
		}
		p.classList.add('text-gray-400');
		e.target.parentNode.parentNode.insertBefore(p, e.target.parentNode);
		e.target.parentNode.classList.add('time');
	};
	const GoToChatList = () => {
		chatState.set(false);
	};
</script>

<main class="flex flex-col relative isolate">
	<div class="py-5 md:p-5 md:m-5 md:bg-white rounded-lg h-full">
		<div class="flex border-b-2 pb-2">
			<button on:click={() => GoToChatList()} class="mr-2 md:hidden">
				<img src="/messeges/back.svg" alt="" />
			</button>
			<img class="max-md:w-10" src={user.profileImg} alt="" />
			<div class="mx-3">
				<p class="font-semibold">{user.name}</p>
				<p class="text-gray-400">{user.gig}</p>
			</div>
		</div>
		<div class="box flex flex-col mb-3 pt-3 md:pb-20 overflow-y-scroll">
			{#each messages as message, i}
				{#if message.sender == 'you'}
					<div class="ml-auto">
						{#if message.type == 'text'}
							<p
								on:click={(e) => seeTime(e, i)}
								class="my-1 md:my-2 p-2 md:p-3 bg-gray-200 rounded-s-2xl rounded-ee-2xl"
							>
								{message.content}
							</p>
						{:else}
							<img
								on:click={(e) => seeTime(e, i)}
								class="max-w-[10rem] md:max-w-[20rem] rounded-xl my-2"
								src="/home/whyUs/greenPeople.png"
								alt=""
							/>
						{/if}
					</div>
				{:else}
					<div class="mr-auto">
						{#if message.type == 'text'}
							<div class="flex items-start my-1 md:my-2">
								<div class="pr-2 w-16 max-md:w-10 shrink-0">
									<img src="/defaultProfile.svg" alt="" />
								</div>
								<p
									on:click={(e) => seeTime(e, i)}
									class="mt-1 p-2 md:p-3 bg-gray-100 rounded-e-2xl rounded-bl-3xl"
								>
									{message.content}
								</p>
							</div>
						{:else}
							<img
								on:click={(e) => seeTime(e, i)}
								class="max-w-[75%] md:max-w-[20rem] ml-8 md:ml-16 rounded-xl my-2"
								src="/home/whyUs/greenPeople.png"
								alt=""
							/>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<Send></Send>
</main>

<style>
	main {
		height: calc(100dvh - 4.7rem);
	}
	.box {
		height: calc(100dvh - 4.7rem - 8.5rem);
	}
	::-webkit-scrollbar {
		width: 0px; /* Remove scrollbar space */
		background: transparent;
		/* Optional: hide scrollbar gutter */
	}
	@media (width <= 768px) {
		* {
			font-size: 0.98em;
		}
		main {
			height: calc(100dvh - 4rem);
		}
	}
</style>
