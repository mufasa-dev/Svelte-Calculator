<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<main>
	<Calculator />
</main>

<style>
	:global(body) {
		background-color: #333;
	}
	:root {
		--back: #555;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>