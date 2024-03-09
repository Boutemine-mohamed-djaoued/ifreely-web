<script>
	import { showDetails } from './../../../lib/stores/FeedState.js';
</script>

<section
	class:left={$showDetails === 2}
	class:p-10={$showDetails != 2}
	class="md:min-h-[100vh] bg-gray-100"
>
	<div class="first-phase">
		<button
			on:click={() => showDetails.set(2)}
			class="bg-primary-300 text-white py-4 w-full rounded-md">Apply To Job</button
		>
		<button class="border-2 my-4 w-full py-4 rounded-md">
			Save Job
			<img class="inline-block" src="/general/heart.svg" alt="" />
		</button>
		<div class="text-gray-400">
			<img class="inline-block" src="/general/Shield.svg" alt="" />
			<span>Report this post</span>
		</div>
		<div class="flex mt-10 items-center">
			<p class="text-gray-400 text-600 border-2 px-4 mr-3 rounded-md">7</p>
			<p>You have applied into 7 Jobs this week !</p>
		</div>
		<div class="flex items-center my-3">
			<p class="text-gray-400 text-600 border-2 px-4 mr-3 rounded-md">4</p>
			<p>You have finished 4 Jobs this week !</p>
		</div>
	</div>
	<div class="client-profile pt-10">
		<h2 class="md:text-500">Client Prfile</h2>
		<div class:flex={$showDetails !== 2} class="items-center mt-5">
			<img class="m-3" src="/defaultProfile.svg" alt="" />
			<div>
				<p>Echidna Greed</p>
				<p>Client Proffesional title</p>
			</div>
		</div>
		<p class="max-w-[35ch] text-gray-500 my-3">
			Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.
			Mollit in laborum tempor Lorem incididunt irure.
		</p>
		<h3>Last Job Posted:</h3>
		<div class:flex={$showDetails !== 2} class="items-center mt-5">
			<div class="w-16 h-16 rounded-md bg-gray-200 m-3">
				<img src="" alt="" />
			</div>
			<div>
				<p>UI/UX Web Design</p>
				<p class="max-w-[30ch] text-[0.85em]">
					Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
				</p>
			</div>
		</div>
		<div class:hidden={$showDetails === 2}>
			<p class="my-5">Active Gigs: 2</p>
			<p>Willaya : <span class="text-gray-400">skikda</span></p>
		</div>
	</div>
	<div class:hidden={$showDetails !== 2} class="second-phase px-5 md:px-10 mt-48">
		<labal class="text-gray-400">Proposal Description</labal>
		<br />
		<textarea
			class="h-[10rem] rounded-md"
			name=""
			id=""
			cols="30"
			rows="10"
			placeholder="Description"
		></textarea>
		<div class="flex">
			<div>
				<label class="text-gray-400" for="">Rate</label>
				<br />
				<input class="w-40 rounded-md" type="text" />
			</div>
			<div>
				<label class="text-gray-400" for="">Time</label>
				<br />
				<input class="w-40 rounded-md" type="text" />
			</div>
		</div>
		<div class="flex justify-center">
			<button class="bg-primary-300 my-10 px-16 py-3 rounded-md text-white mx-auto">
				Send Proposal</button
			>
		</div>
	</div>
</section>

<style>
	.first-phase {
		transition: opacity 0.5s ease;
	}

	.client-profile {
		transition: transform 0.5s ease;
	}
	.left {
		position: relative;
		padding-inline: 0;
	}
	.left .first-phase {
		opacity: 0;
	}
	.left .client-profile {
		width: 100%;
		margin-inline: auto;
		text-align: center;
		position: absolute;
		top: 0rem;
		opacity: 0;
		animation: show 0.5s 0.5s ease forwards;
	}
	.left * {
		margin-inline: auto;
	}
	.second-phase {
		opacity: 0;
		animation: show 0.5s 0.5s ease forwards;
	}
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	/* .client-profile {
		background-color: white;
		clip-path: polygon(0% 0%, 100% 0, 72% 100%, 28% 100%);
	} */
</style>
