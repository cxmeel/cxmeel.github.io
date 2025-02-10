<script lang="ts">
	import config from "../data/config.json";
</script>

<div class="transition-transform hover:-translate-y-1 hover:scale-110">
	<div
		class="animate-fade-down rounded-full bg-accent-50 p-1 animate-delay-300 animate-duration-300 animate-once animate-ease-in">
		<div
			class="flex aspect-1 max-h-36 min-h-24 items-center justify-center rounded-full bg-accent-950 text-onAccent-950">
			{#if config.avatar.type == "image"}
				<img
					src={config.avatar.url}
					alt="Profile"
					class="rounded-full"
					width="100%"
					height="100%" />
			{:else if config.avatar.type == "text"}
				<span class="pb-2 text-4xl font-bold lowercase">
					{config.name.at(0)}
				</span>
			{/if}
		</div>
	</div>
</div>
