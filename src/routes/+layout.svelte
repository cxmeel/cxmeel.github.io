<script lang="ts">
	import Footer from "../widgets/Footer.svelte";
	import Header from "../widgets/Header.svelte";

	import "@fontsource-variable/outfit/index.css";
	import "../app.css";
	import Analytics from "../widgets/Analytics.svelte";
	import Navigation from "../widgets/Navigation.svelte";

	let { children } = $props();
</script>

<Analytics id="G-8MLYBLYS5" />

<div class="hidden">
	<span class="bg-accent-50 text-onAccent-50"></span>
	<span class="bg-accent-100 text-onAccent-100"></span>
	<span class="bg-accent-200 text-onAccent-200"></span>
	<span class="bg-accent-300 text-onAccent-300"></span>
	<span class="bg-accent-400 text-onAccent-400"></span>
	<span class="bg-accent-500 text-onAccent-500"></span>
	<span class="bg-accent-600 text-onAccent-600"></span>
	<span class="bg-accent-700 text-onAccent-700"></span>
	<span class="bg-accent-800 text-onAccent-800"></span>
	<span class="bg-accent-900 text-onAccent-900"></span>
	<span class="bg-accent-950 text-onAccent-950"></span>
</div>

<Header />

<div
	class="flex w-full max-w-screen-md flex-col gap-2 place-self-center px-4 pb-2">
	<Navigation />
</div>

{@render children()}

<Footer />
