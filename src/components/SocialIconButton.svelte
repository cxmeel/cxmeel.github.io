<script lang="ts">
	import Icon from "@iconify/svelte";

	interface SocialLink {
		iconId?: string;
		url?: string;
		name: string;
		handle: string;
	}

	export let socialLink: SocialLink | undefined = undefined;

	export let href: string = socialLink?.url ?? "#/social-link";
	export let iconId: string = socialLink?.iconId ?? "ic:link";
	export let title: string = socialLink
		? `${socialLink.name} - ${socialLink.handle}`
		: "";
</script>

<a {href} rel="me noreferrer noopener" {title} class="group">
	<div
		class={`flex aspect-1 min-h-10 items-center justify-center rounded-full bg-white bg-opacity-25 p-2 transition-all hover:shadow-xl group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-opacity-75`}>
		<span
			class={`text-2xl font-semibold text-accent-50 group-hover:text-accent-950`}>
			<Icon icon={iconId} />
		</span>
	</div>
</a>
