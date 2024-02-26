/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'accent': '#FF00A8',
      'black': "#000",
      'off-black': '#181818',
      'white': '#fff',
      'off-white': '#FCFCFC',
      'blue-white': "#F6F9FA",
      'light-green':"#2BEF83"
    },
    fontSize: {
      300: "clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem)",
      400: "clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem)",
      500: "clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem)",
      600: "clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem)",
      700: "clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem)",
      800: "clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem)",
      900: "clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem)",
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

