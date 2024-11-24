<script lang="ts">
	import SocialLink from "../components/SocialLink.svelte";

	import { primaryLinkIds, socialLinks } from "../data/socials.json";

	const primaryLinks = primaryLinkIds.map((id) => (socialLinks as any)[id]);
	const secondaryLinks = Object.entries(socialLinks)
		.filter(([id]) => !primaryLinkIds.includes(id as any))
		.values();
</script>

<div class="grid grid-cols-2 gap-2">
	{#each primaryLinks as socialLink}
		<SocialLink {...socialLink} primary />
	{/each}

	{#each secondaryLinks as [id, socialLink]}
		<SocialLink {...socialLink} />
	{/each}
</div>
