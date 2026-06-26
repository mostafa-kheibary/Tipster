# ✨ Tipster

Beautiful, flexible, and modern **tooltips for Svelte 5**.

Built with **Floating UI**, **attachments**, and **Svelte snippets** to create elegant floating experiences with minimal code.

---

## 🚀 Features

- ✨ Beautiful default styles
- 🎯 Smart positioning powered by Floating UI
- 🧩 Svelte 5 snippets API
- 🎨 Fully customizable appearance
- ⏱️ Delay support
- 🎮 Controlled and uncontrolled modes
- 📦 Tiny footprint
- 📱 Automatic flipping and viewport collision detection
- 🔥 Rich content support

---

## 📦 Installation

```bash
npm install tipsterjs
# or
pnpm add tipsterjs
# or
yarn add tipsterjs
```

---

## ⚡ Quick Start

```svelte
<script>
	import { Tooltip } from 'tipster';
</script>

<Tooltip text="Hello from Tipster">
	{#snippet children(props)}
		<button {...props}>
			Hover me
		</button>
	{/snippet}
</Tooltip>
```

---

## 🎨 Placement

```svelte
<Tooltip text="Top tooltip" placement="top">
	{#snippet children(props)}
		<button {...props}>
			Top
		</button>
	{/snippet}
</Tooltip>
```

Available placements:

- `top`
- `bottom`
- `left`
- `right`

---

## 🧩 Rich Content

Tooltips can render any Svelte content.

```svelte
<Tooltip placement="top">
	{#snippet text()}
		<div class="font-semibold">
			Deploy Complete
		</div>

		<div class="text-sm">
			Your application is now live.
		</div>
	{/snippet}

	{#snippet children(props)}
		<button {...props}>
			Hover me
		</button>
	{/snippet}
</Tooltip>
```

---

## ⏱️ Delay

```svelte
<Tooltip
	text="Wait for it..."
	delay={1000}
>
	{#snippet children(props)}
		<button {...props}>
			Hover me
		</button>
	{/snippet}
</Tooltip>
```

---

## 🎮 Controlled Mode

```svelte
<script>
	let open = $state(false);
</script>

<Tooltip
	text="Controlled tooltip"
	shouldShowTooltip={open}
>
	{#snippet children(props)}
		<button {...props}>
			Button
		</button>
	{/snippet}
</Tooltip>
```

---

## 🎨 Custom Styling

```svelte
<Tooltip
	text="Custom theme"
	class="bg-indigo-500 text-white"
	arrowClass="bg-indigo-500"
>
	{#snippet children(props)}
		<button {...props}>
			Hover me
		</button>
	{/snippet}
</Tooltip>
```

---

## ⚙️ Props

| Prop                | Type                                     | Default     |
| ------------------- | ---------------------------------------- | ----------- |
| `text`              | `string`                                 | `undefined` |
| `placement`         | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`     |
| `delay`             | `number`                                 | `100`       |
| `shouldShowTooltip` | `boolean`                                | `undefined` |
| `class`             | `string`                                 | `''`        |
| `arrowClass`        | `string`                                 | `''`        |

---

## 💡 Why Tipster?

Tipster combines the power of Floating UI with Svelte 5's new composition model.

- No wrapper components
- No complicated APIs
- Flexible snippets
- Rich content support
- Automatic positioning
- Beautiful defaults

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

```bash
git clone https://github.com/mostafa-kheibary/tipster
cd tipster

pnpm install
pnpm dev
```

---

## 📄 License

MIT © Mostafa Kheibary

Built with ❤️ for the Svelte community.
