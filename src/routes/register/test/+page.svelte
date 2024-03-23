<script>
    import { onMount } from 'svelte';
  
    let formData = { name: '', email: '' };
  
    function saveFormData() {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  
    function loadFormData() {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        formData = JSON.parse(savedData);
      }
    }
  
    onMount(loadFormData);
  </script>
  
  <form>
    <input type="text" bind:value={formData.name} placeholder="Name">
    <input type="email" bind:value={formData.email} placeholder="Email">
    <button on:click={saveFormData}>Save</button>
  </form>
  