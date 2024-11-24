<script lang="ts">
	import { page } from "$app/stores";

	let {
		children,
		href = "/",
		selected = undefined as boolean | undefined,
	} = $props();

	let isSelected = $derived(
    selected ??
        URL.parse(href, $page.url.origin)?.pathname === $page.url.pathname.replace(/\/$/, ""),
);
</script>

<div
	class="transition-transform hover:animate-iteration-infinite
group-odd:-rotate-3 group-even:rotate-3"
	class:hover:animate-wiggle={!isSelected}
>
	<a
		{href}
		class="flex gap-1 text-nowrap rounded border border-dashed border-accent-500 px-4 py-2 font-bold lowercase transition-all"
		class:border-opacity-0={isSelected}
		class:hover:border-opacity-100={!isSelected}
		class:border-opacity-20={!isSelected}
		class:bg-accent-500={isSelected}
		class:text-onAccent-500={isSelected}
		class:bg-onAccent-500={!isSelected}
		class:text-accent-500={!isSelected}
		class:hover:bg-accent-50={!isSelected}
		class:hover:bg-accent-600={isSelected}
		class:hover:text-accent-600={!isSelected}
		class:border-accent-600={!isSelected}
	>
		{@render children()}
	</a>
</div>
