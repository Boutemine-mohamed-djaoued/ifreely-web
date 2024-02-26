import { writable } from "svelte/store";

let data = writable([
  {
    sender: 'you',
    content: 'I think that you should change a lot of things',
    time: '12:00 PM',
    type: 'text'
  },
  {
    sender: 'Nassim',
    content: 'what for example ?',
    time: '12:00 PM',
    type: 'text'
  },
  {
    sender: 'you',
    content: 'the color looks too much off and overall i do not like how you set typography',
    time: '12:00 PM',
    type: 'text'
  },
  {
    sender: 'Nasssim',
    content: 'Ok, I will do my best',
    time: '12:00 PM',
    type: 'text'
  },
  {
    sender: 'Nassim',
    content: '/home/sleepwell/freelance/static/home/whyUs/greenPeople.png',
    time: '12:00 PM',
    type: 'img'
  }
]);
let chatBool = writable(false);
export let messageStore = data;
export let chatState = chatBool;