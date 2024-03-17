<script>
	import { showDetails, showFilters } from './../../../lib/stores/FeedState.js';
	const handleClick = () => {
		showDetails.set(1);
	};
	let gigNum = 911;
	let gigs = [
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		},
		{
			img: '',
			name: 'Sleep Well',
			topic: 'Web Developpement',
			location: 'Annaba',
			time: '29 min ago',
			price: 500,
			paimentMethod: 'Hourly',
			description:
				'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
		}
	];
</script>

<main class="md:mx-10">
	<div class="flex items-center justify-between font-semibold">
		<button on:click={() => showFilters.set(true)} class="flex items-center gap-2">
			<img class="md:hidden" src="/general/filter.svg" alt="" />
			filters
		</button>
		<p class="text-500">{gigNum} Gigs</p>
		<p>sort by</p>
	</div>
	<div>
		{#each gigs as gig}
			<button
				on:click={() => handleClick()}
				class="card text-left items-center rounded-md gap-3 md:gap-x-5 bg-white p-3 md:p-5 my-3 md:my-5"
			>
				<div class="shrink-0 w-16 lg:w-20 aspect-square rounded-md bg-gray-200">
					<img src="" alt="" />
				</div>
				<div class="">
					<p>{gig.name}</p>
					<div class="flex items-center">
						<h2 class="text-400 font-semibold my-1 md:my-2">{gig.topic}</h2>
						<span class="mx-2 bg-primary-300 bg-opacity-20 px-3 rounded-sm text-primary-300"
							>New</span
						>
					</div>
				</div>
				<div class="col-start-1 lg:col-start-2 col-end-3">
					<div class="flex max-md:gap-2 justify-around text-gray-500">
						<div class="flex flex-1 max-md:hidden">
							<img class="w-5 mr-1" src="/general/MapPinLine.svg" alt="" />
							<p class="shrink-0">{gig.location}</p>
						</div>
						<div class="flex flex-1">
							<img class="w-5 mr-1" src="/general/Clock.svg" alt="" />
							<p class="shrink-0">{gig.paimentMethod}</p>
						</div>
						<div class="flex flex-1">
							<img class="w-5 mr-1" src="/general/CurrencyDollar.svg" alt="" />
							<p class="shrink-0">{gig.price}</p>
						</div>
						<div class="flex flex-1">
							<img class="w-5 mr-1" src="/general/CalendarBlank.svg" alt="" />
							<p class="shrink-0">{gig.time}</p>
						</div>
					</div>
					<p class="text-gray-500 my-4">{gig.description}</p>
				</div>
			</button>
		{/each}
	</div>
</main>

<style>
	.card {
		display: grid;
		grid-template-columns: min-content auto;
		grid-template-rows: auto auto;
	}
</style>
