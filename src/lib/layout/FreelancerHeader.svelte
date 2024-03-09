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

<header class="wrapper min-h-14 h-15 shadow-sm sticky top-0 w-full bg-off-white z-[9999]">
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
		<a href="/" class="text-accent text-500 ml-3 md:mr-7">Freeli</a>
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
				<li class="jobs">
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
		<!-- proifle img -->
		<div class="ml-auto md:ml-5">
			<img class="max-md:w-10" src="/defaultProfile.svg" alt="" />
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
		ul li:hover:not(.explore, .jobs, .messages),
		.join:hover {
			@apply text-accent;
			cursor: pointer;
		}
	}
</style>
