<script>
	import Dropdown from '../components/ui/Dropdown.svelte';
	import { onMount } from 'svelte';

	let explore = [
		{ path: '/', value: 'Explore 1' },
		{ path: '/', value: 'Explore 2' },
		{ path: '/', value: 'Explore 3' },
		{ path: '/', value: 'Explore 4' }
	];
	let jobs = [
		{ path: '/', value: 'job 1' },
		{ path: '/', value: 'job 2' },
		{ path: '/', value: 'job 3' },
		{ path: '/', value: 'job 4' }
	];
	let navbar, burgerButton;
	let search = false;
	const handleNavbarClick = () => {
		if (navbar.getAttribute('navbarVisibility') === 'false') {
			navbar.setAttribute('navbarVisibility', 'true');
		} else if (navbar.getAttribute('navbarVisibility') === 'true') {
			navbar.setAttribute('navbarVisibility', 'false');
		}
	};
	const handSearchClick = () => {
		search = !search;
	};
	onMount(() => {
		burgerButton = document.querySelector('.bergur-menu');
		navbar = document.querySelector('nav');
	});
</script>

<header class="wrapper min-h-14 shadow-sm sticky top-0 w-full bg-off-white z-[9999]">
	<div class="py-[0.5em] text-400 flex items-center font-bold bg-off-white">
		<!-- burger menu button -->
		<button
			on:click={() => {
				handleNavbarClick();
			}}
			class="burger-menu shrink-0 md:hidden mr-auto"
		>
			<img src="/home/header/burgerMenu.svg" alt="" />
		</button>
		<!-- logo -->
		<div class:hide={search} class="text-accent text-500 md:mr-7">Freeli</div>
		<!-- the navigation  -->
		<nav navbarVisibility="false" class="max-md:w-0 md:w-full">
			<ul class="font-semibold bg-off-white">
				<li
					on:click={() => {
						handleNavbarClick();
					}}
					class="md:hidden p-2"
				>
					<a href="/freelancer">Home</a>
				</li>
				<li 	class="jobs">
					<Dropdown title={'Jobs'} options={jobs}></Dropdown>
				</li>
				<li
					on:click={() => {
						handleNavbarClick();
					}}
					class="mr-auto p-2"
				>
					<a href="/freelancer/messeges">messages</a>
				</li>
				<li>
					<button
						class="max-md:focus:text-accent max-md:w-full p-[0.5em] focus-visible:ring-2 ring-black rounded-sm"
					>
						<img class="inline-block" src="/home/header/Globe.png" alt="" /> English
					</button>
				</li>
				<li class="explore">
					<Dropdown title={'Explore'} options={explore}></Dropdown>
				</li>
				<!-- notification icon -->
				<li>
					<img class="max-md:hidden" src="/freelancer/header/bell.svg" alt="" />
					<a class="md:hidden inline-block p-2" href="/"> Notifications </a>
				</li>
			</ul>
		</nav>
		<!-- search input -->
		<input
			class:hide={!search}
			class="min-w-0 md:max-lg:hidden mx-8 lg:max-xl:mr-0 font-meduim rounded-full h-9 focus:ring-0 focus:outline-none"
			placeholder="search"
			type="text"
		/>
		<!-- proifle img -->
		<div class="max-md:hidden">
			<img class="ml-5" src="/defaultProfile.svg" alt="" />
		</div>
		<!-- search button -->
		<button
			on:click={() => {
				handSearchClick();
			}}
			class:hide={search}
			class="md:hidden ml-auto"
		>
			<img src="/freelancer/header/search.svg" alt="" />
		</button>
		<!-- exit search -->
		<button
			on:click={() => {
				handSearchClick();
			}}
			class:hide={!search}
			class="md:hidden shrink-0 ml-auto w-4"
		>
			<img src="/freelancer/header/close.png" alt="" />
		</button>
	</div>
</header>

<style>
	ul li {
		flex-shrink: 0;
	}
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
		.hide {
			display: none;
		}
	}
	@media (min-width: 768px) {
		ul {
			@apply flex items-center gap-5;
		}
		ul li:hover:not(.explore, .jobs, .messages),
		.join:hover {
			@apply text-accent;
			cursor: pointer;
		}
	}
</style>
