<script>
	import { createTipster, tooltip } from '../lib/index.js';
</script>

<div>
	<h1>Tipster Demo</h1>
	<button use:tooltip data-title="hello">button</button>
	<p>
		Visit
		<a
			use:tooltip={{ offset: 5 }}
			data-title="Custom reusable tooltip"
			href="https://svelte.dev/docs/kit"
		>
			svelte.dev/docs/kit
		</a>
		to read the documentation
	</p>

	<p>
		Or try a quick inline tooltip:
		<a
			use:tooltip={{ position: 'bottom' }}
			data-title="Dynamic tooltip powered by Tipster"
			href="#"
		>
			hover me
		</a>
	</p>
</div>
