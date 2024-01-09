<script>
	let points = [
		{
			title: 'Diverse Talent Pool :',
			content: 'Whether you need graphic design, programming, writing, or any other skill set.'
		},
		{
			title: 'Cost-Effective Solutions :',
			content:
				'We provide a cost-effective alternative to traditional hiring, You can find skilled professionals at various price points.'
		},
		{
			title: 'Fair Compensation  :',
			content:
				'We prioritize the fair compensation of freelancers on our platform. Our transparent payment system ensures that freelancers receive timely and accurate compensation for their work.'
		},
		{
			title: 'Diverse Job Opportunities :',
			content:
				'Our platform provides freelancers with access to a wide range of job opportunities across various industries and skill sets.'
		}
	];
</script>

<section class="wrapper bg-gray-100 pt-5 pb-16 lg:py-10 relative z-10">
	<div class="lg:flex items-center justify-between">
		<div class="text">
			<h2 class="text-600 md:text-700 font-bold mb-2 md:mb-5">Why us</h2>
			{#each points as point}
				<div class="point fContact Michael flex">
					<div class="icons mr-5 md:mr-10 mt-3 md:mt-5">
						<img src="home/whyUs/check.svg" alt="">
					</div>
					<div class="my-2 md:my-3">
						<h3 class=" text-500 font-medium">{point.title}</h3>
						<p class="text-300 md:text-400 lg:max-w-[50ch]">
							{point.content}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="max-lg:mx-auto max-lg:w-[min(70%,25rem)] lg:w-[clamp(10rem,35vw,37rem)] bg-no-repeat bg-cover aspect-[699/550]"
		style="background-image:url('home/whyUs/greenPeople-lowres.png')"
		>
			<img
				class="w-full"
				src="home/whyUs/greenPeople.png"
				alt="some people wondering why they should pick us"
			/>
		</div>
	</div>
</section>
