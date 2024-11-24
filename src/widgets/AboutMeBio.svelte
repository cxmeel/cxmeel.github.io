<script lang="ts">
	import Link from "../components/Link.svelte";
	import { socialLinks } from "../data/socials.json";

	const robloxYearsActive = new Date().getFullYear() - 2009;
</script>

<div class="my-2 flex flex-col gap-2">
	<p>
		I've been developing on the Roblox platform for
		<b>{robloxYearsActive}</b> years. I'm a full-stack developer, but I specialise
		in frontend development and UI/UX design.
	</p>

	<p>
		I've created and published several plugins to the <Link
			href="https://create.roblox.com/store/plugins?creatorName=cxmeels"
			>Roblox Creator Store</Link
		>, averaging over <b>2,500</b> unique installs per month, and a
		<b>92%</b> average approval rating across all major plugins.
	</p>

	<p class="text-sm font-semibold lowercase opacity-75">
		*stats correct as of November 2024
	</p>

	<h2>Tools</h2>

	<p>
		When developing on <Link href={socialLinks.roblox.url}>Roblox</Link>, I
		frequently use third-party solutions, such as (but not limited to):
	</p>

	<ol>
		<li>
			<Link href="https://github.com/rojo-rbx/rokit">Rokit</Link>
		</li>
		<li>
			<Link href="https://github.com/rojo-rbx/rojo">Rojo</Link>
		</li>
		<li>
			<Link href="https://github.com/UpliftGames/wally">Wally</Link>
		</li>
	</ol>

	<p>
		Both inside and outside of Roblox, I use <Link href="https://figma.com"
			>Figma</Link>
		for UI/UX and graphic design. I also use
		<Link href={socialLinks.github.url}>GitHub</Link> for version control.
	</p>

	<h2>Languages and Frameworks</h2>

	<p>I'm proficient in the following languages and frameworks:</p>

	<ol>
		<li>CSS</li>
		<li>HTML</li>
		<li>JavaScript</li>
		<li>
			<Link href="https://www.typescriptlang.org/">TypeScript</Link>
		</li>
		<li>
			React (<Link href="https://github.com/jsdotlua/react-lua">Roblox</Link>
			and
			<Link href="https://react.dev">web</Link>)
		</li>
		<li>
			<Link href="https://luau.org/">Luau</Link>
		</li>
	</ol>

	<p>
		...to name a few. I'm always open to learning too (I did for this site!).
		I'm also a big fan of <Link href="https://tailwindcss.com"
			>Tailwind CSS</Link
		>!
	</p>

	<p>
		<Link href="#socials" class="underline">Let's connect &rarr;</Link>
	</p>
</div>
