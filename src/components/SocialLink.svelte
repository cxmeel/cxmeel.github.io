<script lang="ts">
	import Icon from "@iconify/svelte";

	export let primary = false;
	export let iconId = "ic:link";
	export let url: string;
	export let name: string;
	export let handle: string;
</script>

<a
	href={url}
	class="group col-span-2 flex gap-4 rounded bg-accent-200 p-2 text-onAccent-200 transition-colors hover:bg-accent-300 hover:text-onAccent-300 hover:shadow-sm"
	class:sm:col-span-1={!primary}
	class:cursor-default={!url}
	title={`${name} - ${handle}`}
	rel="me noopener noreferrer"
>
	<div
		class="flex aspect-1 h-full items-center justify-center rounded-sm bg-accent-50 p-4 text-lg text-accent-800"
	>
		<span class="transition-transform group-hover:scale-110">
			<Icon
				icon={iconId}
				class="transition-transform  group-hover:animate-jump"
			/>
		</span>
	</div>

	<div class="flex w-full flex-col justify-center overflow-hidden leading-none">
		<p class="text-accent-800 group-hover:text-accent-900">{name}</p>
		<p class="text-ellipsis font-bold">{handle}</p>
	</div>

	<div
		class="flex aspect-1 h-full items-center justify-center text-2xl text-accent-500 group-hover:text-accent-600"
	>
		<Icon
			icon="ic:chevron-right"
			class="transition-transform group-hover:translate-x-2"
		/>
	</div>
</a>
