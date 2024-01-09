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
			<img src="home/header/burgerMenu.svg" alt="" />
		</button>
		<!-- logo -->
		<div class="text-accent text-500 max-md:pl-3">Freeli</div>
		<!-- the left content nav + join -->
		<div class="flex">
			<nav navbarVisibility="false">
				<ul
					class="font-mediu max-md:ring-2 max-md:ring-off-white max-md:bg-gray-100 max-md:rounded-md max-md:absolute max-md:top-[3.5em] max-md:left-[5%] max-md:w-[90%] max-md:px-5 max-md:py-3 md:flex items-center gap-5"
				>
					<li>
						<button
							class="max-md:focus:bg-gray-200 max-md:w-full p-[0.5em] focus-visible:ring-2 ring-black rounded-sm"
						>
							<img class="inline-block" src="home/header/Globe.png" alt="" /> English
						</button>
					</li>
					<li>
						<button class=" max-md:focus:bg-gray-200 max-md:w-full rounded-md p-[0.5em]">
							Explore
							<img class="inline-block" src="home/header/downArrow.svg" alt="" />
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
			transform: translateY(-120%);
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
