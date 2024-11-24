<script lang="ts">
	import SocialIconButton from "../components/SocialIconButton.svelte";
	import HeaderAvatar from "./HeaderAvatar.svelte";

	import { headerLinkIds, socialLinks } from "../data/socials.json";
</script>

<header class="wavy-border-bottom bg-accent-500 text-onAccent-500">
	<div
		class="container mx-auto flex flex-col items-center justify-center gap-4 p-4">
		<a href="/">
			<HeaderAvatar />
		</a>

		<ul class="container flex items-center justify-center gap-2">
			{#each headerLinkIds as socialLinkId, index}
				{#if index < 4}
					<SocialIconButton socialLink={(socialLinks as any)[socialLinkId]} />
				{/if}
			{/each}

			<SocialIconButton
				href="#socials"
				title="More links"
				iconId="ic:more-horiz" />
		</ul>
	</div>
</header>
