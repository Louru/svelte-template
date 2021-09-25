<script lang="ts">
  import { Link } from "svelte-navigator";
</script>

<div class="justify-between">
  <Link class="px-2 hover:text-blue-300 transition" to="/">Home</Link>
  <Link class="px-2 hover:text-blue-300 transition" to="/about">About</Link>
  <Link class="px-2 hover:text-blue-300 transition" to="/test"
    >Test Component</Link
  >
</div>
