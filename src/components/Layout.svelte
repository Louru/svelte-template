<script lang="ts">
  import Navigation from "@components/Navigation.svelte";
  export let title: string;
</script>

<header>
  <nav class="fixed z-50 top-0 p-6 w-screen bg-gray-300">
    <div class="flex flex-row items-center justify-between">
      <h1>Svelte Template</h1>
      <Navigation />
    </div>
  </nav>
</header>
<main class="mb-32 mt-28 p-6">
  <h2 class="mb-6">{title}</h2>
  <slot />
</main>
<footer class="p-6 bg-gray-300">{process.env.VITE_GLOBAL_TEST_VARIABLE}</footer>
