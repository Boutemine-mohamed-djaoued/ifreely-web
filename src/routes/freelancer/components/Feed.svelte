<script>
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
	<div class="flex justify-between font-semibold text-500">
		<p>{gigNum} Gigs</p>
		<p>Filter by</p>
	</div>
	<div>
		{#each gigs as gig}
			<div class="flex items-start rounded-md gap-3 md:gap-5 bg-white p-3 md:p-5 my-3 md:my-5">
				<div class="max-md:hidden shrink-0 md:w-16 lg:w-24 aspect-square rounded-md bg-gray-200">
					<img src="" alt="" />
				</div>
				<div>
					<p>{gig.name}</p>
					<h2 class="text-400 font-semibold my-1 md:my-2">{gig.topic}</h2>
					<div class="flex max-md:gap-2 md:justify-around text-gray-500">
						<div class="flex md:flex-1">
							<img class="w-5 mr-1" src="/general/MapPinLine.svg" alt="" />
							<p class="shrink-0">{gig.location}</p>
						</div>
						<div class="flex md:flex-1">
							<img class="w-5 mr-1" src="/general/Clock.svg" alt="" />
							<p class="shrink-0">{gig.paimentMethod}</p>
						</div>
						<div class="flex md:flex-1">
							<img class="w-5 mr-1" src="/general/CurrencyDollar.svg" alt="" />
							<p class="shrink-0">{gig.price}</p>
						</div>
						<div class="flex md:flex-1">
							<img class="w-5 mr-1" src="/general/CalendarBlank.svg" alt="" />
							<p class="shrink-0">{gig.time}</p>
						</div>
					</div>
					<p class="text-gray-500 my-4">{gig.description}</p>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
</style>
