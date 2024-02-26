<script>
	let filters = [
		{
			title: 'Location',
			values: [
				'Location',
				'Near me',
				'Any location',
				'Exact location',
				'Within 15 km',
				'Within 30 km',
				'Within 50 km'
			]
		},
		{
			title: 'Gig rate',
			values: ['Any', '> 30000', '> 50000', '> 80000', '> 100000']
		},
		{
			title: 'Date of posting',
			values: ['All time', 'Last 24 hours', 'Last 3 days', 'Last 7 days']
		},
		{
			title: 'Work experience',
			values: ['Any experience', 'Intermediate', 'Expert']
		},
		{
			title: 'Type of payment',
			values: ['Any', 'Full-project', 'Hourly']
		}
	];
</script>

<aside class="bg-white w-full p-5 mb-5">
	<h2 class="my-3 md:my-4 md:text-400 font-semibold">Filters</h2>
	{#each filters as filter}
		<form>
			<h3 class="my-2 md:my-3 font-semibold">{filter.title}</h3>
			{#each filter.values as value}
				<label for={value}>
					<input
						checked={value === 'Any location' ||
							value === 'Any' ||
							value === 'All time' ||
							value === 'Any experience' ||
							value === 'Any experience'}
						class="m-2"
						type="radio"
						id={value}
						name={filter.title}
						{value}
					/>
					{value}
				</label><br />
			{/each}
		</form>
	{/each}
</aside>

<style>
	input[type='radio']:checked {
		@apply bg-gray-300;
	}
	input[type='radio'] {
		@apply ring-0 outline-none;
	}
	input[type='radio']:checked:focus {
		@apply ring-0 shadow-sm;
	}
</style>
