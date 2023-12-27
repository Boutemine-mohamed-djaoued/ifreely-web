<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	let navbar, burgerButton;
	onMount(() => {
		burgerButton = document.querySelector('.bergur-menu');
		navbar = document.querySelector('nav');
	});
	const handleClick = () => {
		if (navbar.getAttribute('navbarVisibility') === 'false') {
			navbar.setAttribute('navbarVisibility', 'true');
		} else if (navbar.getAttribute('navbarVisibility') === 'true') {
			navbar.setAttribute('navbarVisibility', 'false');
		}
	};
</script>

<header class="wrapper shadow-lg sticky top-0 w-full bg-off-white z-[9999]">
	<div class="py-[0.5em] text-400 font-semibold flex justify-between bg-off-white items-center">
		<button
			on:click={() => {
				handleClick();
			}}
			class="burger-menu md:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="19"
				height="13"
				viewBox="0 0 19 13"
				fill="none"
			>
				<path
					d="M0 13H19V10.8333H0V13ZM0 7.58333H19V5.41667H0V7.58333ZM0 0V2.16667H19V0H0Z"
					fill="black"
				/>
			</svg>
		</button>
		<!-- logo -->
		<div class="text-accent text-500">Freeli</div>
		<!-- the left content nav + join -->
		<div class="flex">
			<nav navbarVisibility="false">
				<ul
					class="font-medium max-md:bg-gray-100 max-md:rounded-md max-md:absolute max-md:top-[3.5em] max-md:left-[5%] max-md:w-[90%] max-md:px-5 max-md:py-3 md:flex items-center gap-5"
				>
					<li>
						<button
							class="max-md:focus:bg-gray-200 max-md:w-full p-[0.5em] focus-visible:ring-2 ring-black rounded-sm"
						>
							<img class="inline-block" src="assets/home/Globe.png" alt="Globe-icon" /> English
						</button>
					</li>
					<li>
						<button class=" max-md:focus:bg-gray-200 max-md:w-full rounded-md p-[0.5em]">
							Explore
							<svg
								class="inline-block fill-black"
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="9"
								viewBox="0 0 14 9"
							>
								<path
									d="M1.64402 0L6.99902 5.56275L12.354 0L13.999 1.71255L6.99902 9L-0.000976562 1.71255L1.64402 0Z"
								/>
							</svg>
						</button>
					</li>
					<Dropdown class="bg-off-white" offset="15">
						<DropdownItem>Dashboard</DropdownItem>
						<DropdownItem>Settings</DropdownItem>
						<DropdownItem>Earnings</DropdownItem>
						<DropdownItem>Sign out</DropdownItem>
					</Dropdown>
					<li>
						<a
							href="/"
							class=" inline-block max-md:hover:bg-gray-200 max-md:w-full p-[0.5em] md:focus-visible:ring-2 ring-black rounded-sm"
							>Log in</a
						>
					</li>
				</ul>
			</nav>
			<a href="/" class="join cursor-pointer md:p-[0.5em] md:ml-5">join</a>
		</div>
	</div>
</header>

<style>
	@media (max-width: 767px) {
		nav ul {
			transition: transform 0.7s ease-in-out;
			z-index: -1;
		}

		nav[navbarVisibility='false'] ul {
			transform: translateY(-150%);
		}
		ul li button {
			text-align: left;
		}
	}
	@media (min-width: 768px) {
		ul li:hover,
		.join:hover {
			@apply text-accent;
			cursor: pointer;
		}
	}
</style>
