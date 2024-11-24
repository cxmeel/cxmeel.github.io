<script lang="ts">
	import Link from "../components/Link.svelte";
	import SocialIconButton from "../components/SocialIconButton.svelte";

	import { footerLinkIds, socialLinks } from "../data/socials.json";
</script>

<div class="flex grow"></div>

<footer class="wavy-border-top w-full bg-accent-700 text-accent-200">
	<div
		class="mx-auto flex max-w-3xl flex-row flex-wrap justify-center gap-2 p-4">
		<div
			class="flex w-full grow flex-row justify-center gap-2 sm:w-auto sm:justify-start sm:text-left">
			{#each footerLinkIds as socialLinkId, index}
				{#if index < 3}
					<SocialIconButton socialLink={(socialLinks as any)[socialLinkId]} />
				{/if}
			{/each}
		</div>

		<div
			class="flex w-full grow flex-col items-center text-accent-300 sm:w-auto sm:items-end sm:text-right">
			<Link href="https://github.com/cxmeel/cxmeel.github.io">site by me!</Link>

			<p class="opacity-90">
				using <Link href="https://tailwindcss.com">tailwindcss</Link> and
				<Link href="https://svelte.dev">sveltekit</Link>
			</p>
		</div>

		<div class="mt-2 sm:ml-2 sm:mt-0">
			<SocialIconButton
				href="#top"
				title="Back to top"
				iconId="ic:keyboard-arrow-up" />
		</div>
	</div>
</footer>
