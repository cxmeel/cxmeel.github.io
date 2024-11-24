<script lang="ts">
	import ProjectCard from "../../components/ProjectCard/ProjectCard.svelte";

	import projects from "../../data/projects.json";
</script>

<main
	class="flex w-full max-w-screen-md flex-col gap-2 place-self-center px-4 pb-3">
	<h1 id="projects">Projects</h1>

	<div class="flex flex-col gap-2">
		<p>
			This is a non-exhaustive list of projects I've created or contributed to.
		</p>

		<div class="grid grid-flow-row gap-3 sm:grid-cols-2">
			{#each projects as project}
				<ProjectCard {...project as any} />
			{/each}
		</div>
	</div>
</main>
