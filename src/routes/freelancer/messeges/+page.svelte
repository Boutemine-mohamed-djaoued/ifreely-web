<script>
	import ChatBox from '../../../lib/components/messaging/ChatBox.svelte';
	import ChatList from '../../../lib/components/messaging/ChatList.svelte';
	import { chatState } from '$lib/stores/messeges.js';
	let chat;
	chatState.subscribe((value) => {
		chat = value;
	});
	let friends = [
		{
			name: 'Sleep Well',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'logo',
			loged: true,
			lastMessage: '5000 DA',
			lastContact: '1 Hour',
			lastSender: 'you',
			notifications: 1
		},
		{
			name: 'Nassim',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'website',
			loged: false,
			lastMessage: 'i don"t like the design',
			lastContact: '2 Days',
			lastSender: 'you',
			notifications: 2
		},
		{
			name: 'Kanyo',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'excel',
			loged: true,
			lastMessage: 'this is the result',
			lastContact: 'now',
			lastSender: 'Kanyo',
			notifications: 0
		},
		{
			name: 'Tarek',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'server',
			loged: true,
			lastMessage: 'I need 1 month',
			lastContact: '3 Months',
			lastSender: 'Tarek',

			notifications: 0
		},
		{
			name: 'Moncef',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'financial plan',
			loged: false,
			lastMessage: 'how about marketing',
			lastContact: '1 minute',
			lastSender: 'Moncef',
			notifications: 9
		},
		{
			name: 'Sleep Well',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'logo',
			loged: true,
			lastMessage: '5000 DA',
			lastContact: '1 Hour',
			lastSender: 'you',
			notifications: 1
		},
		{
			name: 'Nassim',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'website',
			loged: false,
			lastMessage: 'i don"t like the design',
			lastContact: '2 Days',
			lastSender: 'you',
			notifications: 2
		},
		{
			name: 'Kanyo',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'excel',
			loged: true,
			lastMessage: 'this is the result',
			lastContact: 'now',
			lastSender: 'Kanyo',
			notifications: 0
		},
		{
			name: 'Tarek',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'server',
			loged: true,
			lastMessage: 'I need 1 month',
			lastContact: '3 Months',
			lastSender: 'Tarek',

			notifications: 0
		},
		{
			name: 'Moncef',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'financial plan',
			loged: false,
			lastMessage: 'how about marketing',
			lastContact: '1 minute',
			lastSender: 'Moncef',
			notifications: 9
		},
		{
			name: 'Sleep Well',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'logo',
			loged: true,
			lastMessage: '5000 DA',
			lastContact: '1 Hour',
			lastSender: 'you',
			notifications: 1
		},
		{
			name: 'Nassim',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'website',
			loged: false,
			lastMessage: 'i don"t like the design',
			lastContact: '2 Days',
			lastSender: 'you',
			notifications: 2
		},
		{
			name: 'Kanyo',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'excel',
			loged: true,
			lastMessage: 'this is the result',
			lastContact: 'now',
			lastSender: 'Kanyo',
			notifications: 0
		},
		{
			name: 'Tarek',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'server',
			loged: true,
			lastMessage: 'I need 1 month',
			lastContact: '3 Months',
			lastSender: 'Tarek',

			notifications: 0
		},
		{
			name: 'Moncef',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'financial plan',
			loged: false,
			lastMessage: 'how about marketing',
			lastContact: '1 minute',
			lastSender: 'Moncef',
			notifications: 9
		},
		{
			name: 'Sleep Well',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'logo',
			loged: true,
			lastMessage: '5000 DA',
			lastContact: '1 Hour',
			lastSender: 'you',
			notifications: 1
		},
		{
			name: 'Nassim',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'website',
			loged: false,
			lastMessage: 'i don"t like the design',
			lastContact: '2 Days',
			lastSender: 'you',
			notifications: 2
		},
		{
			name: 'Kanyo',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'excel',
			loged: true,
			lastMessage: 'this is the result',
			lastContact: 'now',
			lastSender: 'Kanyo',
			notifications: 0
		},
		{
			name: 'Tarek',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'server',
			loged: true,
			lastMessage: 'I need 1 month',
			lastContact: '3 Months',
			lastSender: 'Tarek',

			notifications: 0
		},
		{
			name: 'Moncef',
			profileImg: '/defaultProfile.svg',
			gigTitle: 'financial plan',
			loged: false,
			lastMessage: 'how about marketing',
			lastContact: '1 minute',
			lastSender: 'Moncef',
			notifications: 9
		}
	];
	let user = {
		name: 'Nassim',
		profileImg: '/defaultProfile.svg',
		gig: 'website'
	};
</script>

<div class="flex relative">
	<div class:hide={chat} class="chat-list w-full md:w-[max(30vw,20rem)]">
		<ChatList {friends}></ChatList>
	</div>
	<div class:hide={!chat} class="w-full">
		<ChatBox {user}></ChatBox>
	</div>
</div>

<style>
	@media (width < 768px) {
		.hide {
			display: none;
		}
	}
</style>
