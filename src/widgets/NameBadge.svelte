<script lang="ts">
	import config from "../data/config.json";

	export let name = config.name;
</script>

<div class="flex w-full cursor-default flex-col items-center px-4 py-2">
	<div
		class="flex w-full max-w-lg rotate-1 flex-col items-center gap-2 rounded-lg bg-accent-500 p-2">
		<div
			class="flex flex-col items-center text-lg font-bold uppercase leading-none text-accent-50">
			<span class="text-3xl">Hello</span>
			<span>My name is</span>
		</div>

		<div
			class="flex w-full items-center justify-center text-wrap rounded bg-accent-50 p-4 text-5xl font-bold lowercase leading-none text-accent-950">
			{name}
		</div>
	</div>
</div>
