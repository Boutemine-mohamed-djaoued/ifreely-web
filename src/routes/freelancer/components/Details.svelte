<script>
	import { showDetails } from '../../../lib/stores/FeedState';
	let gig = {
		img: '',
		name: 'Sleep Well',
		topic: 'Web Developpement',
		location: 'Annaba',
		time: '29 min ago',
		price: 500,
		paimentMethod: 'Hourly',
		description:
			'Mollit in laborum tempor Lorem incididunt irure.  Aute eu ex ad sunt. Pariatur sint culpa do i ncididunt eiusmod eiusmod  culpa. laborum tempor Lorem incidieiusmod  culpa. laborum tempor Lorem incidieiusmod  culpa. laborum tempor Lorem incidieiusmod  culpa. laborum tempor Lorem incidieiusmod  culpa. laborum tempor Lorem incidieiusmod  culpa. laborum tempor Lorem incididunt.Mollit in laborum tempor Lorem incididunt irure.  Aute eu ex ad sunt. Pariatur sint culpa do i ncididunt eiusmod eiusmod  culpa. laborum tempor Lorem incididunt.',
		files: [
			{
				name: 'Research.pdf',
				size: '2.8MB'
			},
			{
				name: 'clientList.Word',
				size: '4.2MB'
			}
		],
		skills: ['Python', 'Backend', 'Django']
	};
</script>

<section class="p-5 md:p-10 max-w-[40rem]">
	<button on:click={() => showDetails.set(0)}>
		<img class="w-8" src="/general/back.svg" alt="" />
	</button>
	<div class="flex items-center my-5 md:my-10">
		<div class="w-20 h-20 rounded-lg bg-gray-200">
			<img src="" alt="" />
		</div>
		<h2 class="md:text-500 md:font-semibold ml-5">{gig.topic}</h2>
	</div>
	<div class="flex my-5 md:my-10 justify-around text-gray-500">
		<div class="">
			<img class="w-8 mb-3 mx-auto" src="/general/MapPinLine.svg" alt="" />
			<p class="shrink-0">{gig.location}</p>
		</div>
		<div class="">
			<img class="w-8 mb-3 mx-auto" src="/general/Clock.svg" alt="" />
			<p class="shrink-0">{gig.paimentMethod}</p>
		</div>
		<div class="">
			<img class="w-8 mb-3 mx-auto" src="/general/CurrencyDollar.svg" alt="" />
			<p class="shrink-0">{gig.price}</p>
		</div>
		<div class="">
			<img class="w-8 mb-3 mx-auto" src="/general/CalendarBlank.svg" alt="" />
			<p class="shrink-0">{gig.time}</p>
		</div>
	</div>
	<p class="text-gray-500 text-justify">{gig.description}</p>
	<h3 class="mt-10 text-400">Files Uploaded:</h3>
	<div class="my-5">
		{#each gig.files as file}
			<div class="flex my-3 justify-between text-gray-500">
				<p>{file.name}</p>
				<p>{file.size}</p>
			</div>
		{/each}
	</div>
	<div class="flex justify-between text-center my-7">
		<div>
			<h3>Work modality</h3>
			<p class="my-2 text-gray-500">Onsite</p>
		</div>
		<div>
			<h3>Payement Structure</h3>
			<p class="my-2 text-gray-500">Milestone</p>
		</div>
		<div>
			<h3>Payement Method</h3>
			<p class="my-2 text-gray-500">CCP</p>
		</div>
	</div>
	<h3>Skills & technologies:</h3>
	<div class="flex gap-5 my-3">
		{#each gig.skills as skill}
			<p class="bg-gray-200 text-[0.85em] py-1 px-5 rounded-lg">{skill}</p>
		{/each}
	</div>
</section>
