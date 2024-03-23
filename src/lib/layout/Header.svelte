<script>
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import { onMount } from 'svelte';
	let explore = [
		{ path: '/', value: 'Explore 1' },
		{ path: '/', value: 'Explore 2' },
		{ path: '/', value: 'Explore 3' },
		{ path: '/', value: 'Explore 4' }
	];
	let navbar, burgerButton;
	const handleNavbarClick = () => {
		if (navbar.getAttribute('navbarVisibility') === 'false') {
			navbar.setAttribute('navbarVisibility', 'true');
		} else if (navbar.getAttribute('navbarVisibility') === 'true') {
			navbar.setAttribute('navbarVisibility', 'false');
		}
	};
	onMount(() => {
		burgerButton = document.querySelector('.bergur-menu');
		navbar = document.querySelector('nav');
	});
</script>

<header class="wrapper shadow-sm sticky top-0 w-full bg-off-white z-[9999]">
	<div class="py-[0.5em] text-400 font-semibold flex justify-between bg-off-white items-center">
		<button
			on:click={() => {
				handleNavbarClick();
			}}
			class="burger-menu md:hidden"
		>
			<img src="home/header/burgerMenu.svg" alt="" />
		</button>
		<!-- logo -->
		<div class="text-primary-300 text-500 max-md:pl-3">Freeli</div>
		<!-- the left content nav + join -->
		<div class="flex">
			<nav navbarVisibility="false">
				<ul class="font-semibold bg-off-white">
					<li>
						<button
							class="max-md:border-t-2 max-md:focus:text-primary-300 max-md:w-full p-[0.5em] focus-visible:ring-2 ring-black rounded-sm"
						>
							<img class="inline-block" src="home/header/Globe.png" alt="" /> English
						</button>
					</li>
					<li class="explore">
						<Dropdown title={'Explore'} options={explore}></Dropdown>
					</li>
					<li>
						<a
							href="/freelancer"
							class=" inline-block max-md:hover:text-primary-300 max-md:w-full p-[0.5em] md:focus-visible:ring-2 ring-black rounded-sm"
							>Log in</a
						>
					</li>
				</ul>
			</nav>
			<a href="/register" class="join cursor-pointer md:p-[0.5em] md:ml-5">join</a>
		</div>
	</div>
</header>

<style>
	@media (max-width: 767px) {
		ul {
			@apply absolute top-[3rem] h-[100vh] w-full left-0 px-5 py-3;
		}
		nav ul {
			transition: transform 0.7s ease-in-out;
			z-index: -1;
		}

		ul li {
			@apply border-b-2;
		}
		nav[navbarVisibility='false'] ul {
			transform: translateY(-120%);
		}
		ul li button {
			text-align: left;
		}
	}
	@media (min-width: 768px) {
		ul {
			@apply flex items-center gap-5;
		}
		ul li:hover:not(.explore),
		.join:hover {
			@apply text-primary-300;
			cursor: pointer;
		}
	}
</style>
