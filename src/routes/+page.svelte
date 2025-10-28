<script>
	import { createTipster, tooltip } from '../lib/index.js';

	const redTooltip = createTipster({
		backgroundColor: 'red',
		color: 'white',
		borderColor: 'darkred',
		borderWidth: '2px',
		fontSize: '14px',
		position: 'top',
		offset: 30
	});
</script>

<div>
	<h1>Tipster Demo</h1>
	<p>
		Visit
		<a
			use:redTooltip={{ offset: 5 }}
			title="Custom reusable tooltip"
			href="https://svelte.dev/docs/kit"
		>
			svelte.dev/docs/kit
		</a>
		to read the documentation
	</p>

	<p>
		Or try a quick inline tooltip:
		<a
			use:tooltip={{ backgroundColor: 'blue', color: 'white', position: 'bottom' }}
			title="Dynamic tooltip powered by Tipster"
			href="#"
		>
			hover me
		</a>
	</p>
</div>
