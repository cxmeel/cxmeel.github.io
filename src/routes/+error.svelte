<script lang="ts">
	import { page } from "$app/stores";
</script>

<div
	class="flex w-full max-w-3xl flex-col items-center gap-4 place-self-center"
>
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

	<a
		href="/"
		class="rounded-full bg-accent-500 px-4 py-2 font-semibold lowercase text-accent-50 transition-all hover:scale-110 hover:bg-accent-700"
	>
		Back to safety &rarr;</a
	>
</div>
