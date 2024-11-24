<script lang="ts">
	let {
		children,
		class: className,
		overrideClass,
		href,
		...rest
	}: {
		children: () => any;
		class?: string;
		href?: string;
		[key: string]: any;
	} = $props();
</script>

<a {href} class={className} rel="noopener noreferrer" {...rest}>
	{@render children()}
</a>

<style>
	a:not(.unstyled) {
		@apply relative cursor-pointer font-bold text-inherit decoration-wavy underline-offset-4 hover:underline;
		filter: brightness(125%) saturate(125%);
	}
</style>
