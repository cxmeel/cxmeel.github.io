<script lang="ts">
	import { page } from "$app/stores";
	import Button from "../components/Button.svelte";
</script>

<div
	class="flex w-full max-w-3xl flex-col items-center gap-4 place-self-center">
	<div class="flex flex-col items-center">
		{#if $page.status >= 200 && $page.status <= 299}
			<h1>uh-oh!</h1>
		{:else}
			<h1>{$page.status}</h1>
		{/if}

		<div class="flex flex-col items-center gap-0 font-semibold lowercase">
			{#if $page.error?.message}
				<p>{$page.error.message}</p>
			{:else}
				<p>Something went wrong</p>
			{/if}
		</div>
	</div>

	<Button href="/">Back to safety &rarr;</Button>
</div>
