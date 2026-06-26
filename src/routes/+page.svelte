<script lang="ts">
	import Tooltip from '$lib/components/Tooltip.svelte';
	import '../lib/style.css';

</script>

<svelte:head>
	<title>Tipster</title>
</svelte:head>

<div
	class="fixed inset-0 -z-10 overflow-hidden bg-zinc-950"
>
	<div
		class="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[180px]"
	></div>
	<div
		class="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]"
	></div>
</div>

<!-- HERO -->
<section
	class="relative overflow-hidden  text-white"
>
	<div class="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,.2),transparent_50%)]" ></div>

	<div class="mx-auto max-w-6xl px-6 py-32 text-center">
		<div
			class="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur"
		>
			✨ Floating tooltips for Svelte 5
		</div>

		<h1 class="mb-6 text-7xl font-black tracking-tight">
			Tipster
		</h1>

		<p class="mx-auto mb-10 max-w-2xl text-xl text-zinc-300">
			Beautiful, flexible, attachment-powered tooltips built for modern Svelte apps.
		</p>

		<div class="flex justify-center gap-4">
			<a
			href="#install"
				class="rounded-xl cursor-pointer bg-indigo-500 px-6 py-3 font-semibold transition hover:scale-105"
			>
				Get Started
		</a>

			<Tooltip text="Install with npm">
				{#snippet children(props)}
					<button
						{...props}
						class="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur"
					>
						npm install tipsterjs
					</button>
				{/snippet}
			</Tooltip>
		</div>
	</div>
</section>

<!-- FEATURES -->

<section class="mx-auto max-w-6xl px-6 py-28 text-white">
	<div class="mb-16 text-center">
		<p class="mb-3 text-indigo-400">
			Why Tipster
		</p>

		<h2 class="text-5xl font-black">
			Built for modern Svelte applications
		</h2>

		<p class="mx-auto mt-4 max-w-2xl text-zinc-400">
			A powerful tooltip system with beautiful defaults and complete control.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		<div
			class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
		>
			<div class="mb-4 text-5xl">⚡</div>

			<h3 class="mb-3 text-xl font-semibold">
				Fast
			</h3>

			<p class="text-zinc-400">
				Tiny runtime and minimal overhead.
			</p>
		</div>

		<div
			class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
		>
			<div class="mb-4 text-5xl">🎯</div>

			<h3 class="mb-3 text-xl font-semibold">
				Floating UI
			</h3>

			<p class="text-zinc-400">
				Automatic positioning and collision detection.
			</p>
		</div>

		<div
			class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
		>
			<div class="mb-4 text-5xl">✨</div>

			<h3 class="mb-3 text-xl font-semibold">
				Svelte 5 Native
			</h3>

			<p class="text-zinc-400">
				Snippets and runes first.
			</p>
		</div>
	</div>
</section>

<!-- STATS -->

<section class="border-y border-white/10 py-24 text-white">
	<div
		class="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-6 text-center md:grid-cols-3"
	>
		<div>
			<div class="text-5xl font-black">
				Light
			</div>

			<div class="mt-2 text-zinc-400">
				Single component
			</div>
		</div>

		<div>
			<div class="text-5xl font-black">
				100%
			</div>

			<div class="mt-2 text-zinc-400">
				TypeScript
			</div>
		</div>

		<div>
			<div class="text-5xl font-black">
				Svelte 5
			</div>

			<div class="mt-2 text-zinc-400">
				Native
			</div>
		</div>
	</div>
</section>

<section id='install' class="py-28 text-white">
	<div class="mx-auto max-w-4xl px-6">
		<div
			class="rounded-[40px] border border-white/10 bg-zinc-900/80 p-10 backdrop-blur"
		>
			<p class="mb-3 text-indigo-400">
				Get Started
			</p>

			<h2 class="mb-8 text-5xl font-black">
				Install in seconds
			</h2>

			<pre
				class="overflow-auto rounded-2xl bg-black p-6 text-green-400"
			><code>npm install tipsterjs</code></pre>
		</div>
	</div>
</section>


<footer class="border-t border-white/10 py-12 text-center text-zinc-500">
	Built with Svelte 5 • Floating UI • Attachments API
</footer>



<style>
	:global(:root){
		scroll-behavior: smooth;
	}
</style>