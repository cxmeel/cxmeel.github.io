<script lang="ts">
	import { browser } from "$app/environment";

	export let id: string;

	if (browser) {
		window.dataLayer = window.dataLayer || [];

		function gtag(...args: any[]) {
			window.dataLayer.push(...args);
		}

		gtag("js", new Date());
		gtag("config", id);

		window.gtag = gtag;
	}
</script>

<svelte:head>
	<script
		async
		src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
</svelte:head>
