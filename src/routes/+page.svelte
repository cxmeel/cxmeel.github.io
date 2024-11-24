<script lang="ts">
	import Button from "../components/Button.svelte";
	import ProjectCard from "../components/ProjectCard/ProjectCard.svelte";
	import AboutMeBio from "../widgets/AboutMeBio.svelte";
	import NameBadge from "../widgets/NameBadge.svelte";
	import SocialsGrid from "../widgets/SocialsGrid.svelte";

	import projects from "../data/projects.json";
</script>

<main
	class="flex w-full max-w-screen-md flex-col gap-2 place-self-center px-4 pb-3">
	<section>
		<h1 id="about">About me</h1>

		<NameBadge />

		<AboutMeBio />
	</section>

	<section>
		<h1 id="projects">Projects</h1>

		<div class="flex flex-col gap-2">
			<p>
				This is a non-exhaustive list of projects I've created or contributed
				to.
			</p>

			<div class="grid grid-flow-row grid-cols-2 gap-2">
				{#each projects as project, index}
					{#if index < 4}
						<ProjectCard {...project as any} compact />
					{/if}
				{/each}
			</div>

			<div class="flex w-full justify-center">
				<Button href="/projects">Discover more projects</Button>
			</div>
		</div>
	</section>

	<section>
		<h1 id="socials">Socials</h1>

		<SocialsGrid />
	</section>
</main>

<style>
	section:not(:last-child) {
		@apply border-b border-accent-200 pb-2;
	}

	section > h1 {
		@apply mb-2;
	}
</style>
