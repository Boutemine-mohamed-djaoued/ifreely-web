<script>
	// global styles
	import '../app.css';
	import Header from '../lib/layout/Header.svelte';
	import Footer from '../lib/layout/Footer.svelte';
</script>

<div class="grid-system overflow-y-clip">
	<Header></Header>
	<slot />
  <Footer></Footer>
</div>
