<script>
	import { messageStore } from '$lib/stores/messeges.js';
	import { onMount } from 'svelte';
	const sendMessage = () => {
		let textInput = document.querySelector('.textInput');
		if (!textInput.value) return;
		messageStore.update((messagesArray) => {
			// Add a new message to the array
			const newMessage = {
				sender: 'you',
				content: textInput.value,
				time: new Date().toLocaleTimeString(),
				type: 'text'
			};
			return [...messagesArray, newMessage];
		});
		textInput.value = '';
	};
	onMount(() => {
		let fileInput = document.querySelector('.fileInput');
		let selectedFile = document.querySelector('.selected');
		fileInput.addEventListener('change', () => {
			let filePath = fileInput.value;
			let fakePathIndex = filePath.indexOf('C:\\fakepath\\');
			let additionalWords = filePath.substring(fakePathIndex + 'C:\\fakepath\\'.length);
			selectedFile.textContent = additionalWords.trim();
		});
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Enter') {
				sendMessage();
			}
		});
	});
</script>

<div class="send absolute -bottom-10 isolate py-3 mb-8 md:mb-7">
	<div class="bg-white rounded-xl flex items-center py-2 md:py-4">
		<label class="mx-2 relative shrink-0 hover:cursor-pointer" for="files">
			<img src="/messeges/file.svg" alt="" />
			<div class="selected absolute bottom-8 bg-gray-200 rounded-full px-2"></div>
		</label>
		<input class="fileInput w-0" type="file" id="files" />
		<input
			class="textInput min-w-0 border-none focus:ring-0 bg-gray-100 rounded-2xl w-full"
			placeholder="send a message"
			type="text"
		/>
		<button class="mx-2 shrink-0">
			<img src="/messeges/Voice.svg" alt="" />
		</button>
		<button on:click={() => sendMessage()} class="mx-2 shrink-0">
			<img src="/messeges/Send.svg" alt="" />
		</button>
	</div>
</div>

<style>
	.send {
		--margin: 2.5rem;
		margin-left: calc(var(--margin) / 2);
		width: calc(100% - var(--margin));
	}
	@media (width < 768px) {
		.send {
			--margin: 0rem;
		}
	}
	@media (width >= 768px) {
		.send::after {
			--offset: 0.5rem;
			content: '';
			position: absolute;
			@apply bg-blue-white;
			width: 100%;
			height: calc(100% + var(--offset) * 2);
			right: 0;
			bottom: 0;
			transform: translateY(var(--offset));
			z-index: -1;
		}
	}
</style>
