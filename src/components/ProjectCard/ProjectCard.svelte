<script lang="ts">
	import Icon from "@iconify/svelte";
	import Button from "../Button.svelte";
	import Link from "../Link.svelte";
	import TagChip from "./TagChip.svelte";

	export let compact = false;
	export let name: string;
	export let description: string;
	export let category: keyof typeof categoryInfoMap;
	export let links: {
		name: string;
		url: string;
		icon?: string;
	}[] = [];
	export let media: {
		type: string | "image" | "youtube";
		url: string;
		alt?: string;
	}[] = [];
	export let tags: string[] = [];

	const slug = name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
	const categoryInfoMap = {
		roblox: { name: "Roblox", icon: "simple-icons:roblox" },
	};
</script>

<div
	class="group flex flex-col gap-1 rounded-lg bg-accent-200 p-1 odd:-rotate-[0.5deg] even:rotate-[0.5deg] hover:z-10"
	id={`project-${slug}`}>
	<div
		class="flex grow flex-col gap-2 rounded border-4 border-dashed border-accent-300 px-2 py-1">
		<h2 class="flex flex-row items-center justify-between">
			{name}

			<span title={categoryInfoMap[category].name}>
				<Icon icon={categoryInfoMap[category].icon} />
			</span>
		</h2>

		<div class="flex rounded-lg bg-accent-50 p-1">
			<div class="aspect-h-9 aspect-w-16 h-auto w-full">
				{#each media as { type, url, alt }}
					{#if type === "image"}
						<img src={url} {alt} class="w-full rounded" />
					{:else if type === "youtube"}
						{#if compact}
							<img
								src={`https://img.youtube.com/vi/${new URL(url).searchParams.get("v")}/maxresdefault.jpg`}
								{alt}
								class="w-full rounded" />
						{:else}
							<iframe
								src="https://www.youtube-nocookie.com/embed/{new URL(
									url,
								).searchParams.get('v')}"
								title={alt}
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
								class="w-full rounded"></iframe>
						{/if}
					{/if}
				{/each}
			</div>
		</div>

		<div class="flex w-full flex-row flex-wrap gap-1">
			{#each tags as tag}
				<TagChip>{tag}</TagChip>
			{/each}
		</div>

		<div class="flex flex-col gap-0">
			<p class:line-clamp-3={compact}>
				{#if description}
					{#each description.split("\n") as line, index}
						{#if index > 0}
							<span class="block h-4"></span>
						{/if}

						{line}
					{/each}
				{/if}
			</p>

			{#if compact}
				<Link href={`/projects#project-${slug}`} class="text-accent-400"
					>Show more</Link>
			{/if}
		</div>
	</div>

	{#if links?.length}
		<div class="flex w-full flex-row flex-wrap items-stretch gap-1">
			{#each links as { name, url, icon }, i}
				<Button
					href={url}
					class="grow bg-accent-400 hover:bg-accent-500 hover:text-accent-50">
					{#if icon}
						<Icon {icon} />
					{/if}
					{name}
				</Button>
			{/each}
		</div>
	{/if}
</div>
