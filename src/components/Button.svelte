<script lang="ts">
	import { twMerge } from "tailwind-merge";

	let {
		children,
		href,
		class: className,
		...rest
	}: {
		children: () => any;
		href: string;
		class?: string;
		[key: string]: any;
	} = $props();
</script>

<a
	{href}
	rel="noopener noreferrer"
	{...rest}
	class={twMerge(
		"flex flex-row items-center gap-2 rounded-full bg-accent-500 px-4 py-2 font-semibold lowercase text-accent-50 transition-all hover:z-10 hover:scale-110 hover:bg-accent-700",
		className,
	)}>
	{@render children()}
</a>
