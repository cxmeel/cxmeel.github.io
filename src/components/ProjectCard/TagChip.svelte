<script lang="ts">
	let { children, ...rest } = $props();
</script>

<a
	class="rounded-full bg-accent-300 p-px text-sm font-bold lowercase text-accent-900"
	class:cursor-default={!(rest.href || rest.onclick)}
	class:cursor-pointer={rest.onclick}
	{...rest}>
	<div
		class="flex items-center justify-center rounded-full border-2 border-dashed border-accent-200 px-2 py-1">
		{@render children()}
	</div>
</a>
