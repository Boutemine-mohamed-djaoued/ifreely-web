<script>
  // global styles
  import "../app.css";
  import Header from "../lib/layout/Header.svelte";
</script>

<div class="grid-system overflow-y-clip">
  <Header></Header>
  <slot />
</div>