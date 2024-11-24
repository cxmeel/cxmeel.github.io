<script lang="ts">
	import NavigationChip from "../components/NavigationChip.svelte";
</script>

<nav>
	<ul class="flex flex-wrap gap-2 py-1">
		<li class="group">
			<NavigationChip href="/">about me</NavigationChip>
		</li>
		<li class="group">
			<NavigationChip href="/projects">projects</NavigationChip>
		</li>
		<li class="group">
			<NavigationChip href="/#socials" selected={false}>socials</NavigationChip>
		</li>
	</ul>
</nav>
