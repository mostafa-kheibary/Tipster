# 🧠 Tipster

Beautiful, flexible, and easy-to-use **tooltips for Svelte**.
Create reusable tooltip styles, customize colors, borders, and positions — all with a tiny footprint ✨

---

### 🚀 Features

- 🎨 Customizable background, color, border, font, and offset
- 🪄 `createTipster()` to define reusable tooltip presets
- ⚡ Simple `use:tooltip` directive for quick usage
- 📍 Smart positioning (`top`, `bottom`, `left`, `right`)
- 🧩 Built with Svelte’s reactivity and clean architecture

---

### 📦 Installation

```bash
npm install tipsterjs
# or
yarn add tipsterjs
# or
pnpm add tipsterjs
```

---

### 💡 Quick Example

```svelte
<script>
	import { createTipster, tooltip } from 'tipsterjs';

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
	>
		hover me
	</a>
</p>
```

---

### ⚙️ API

#### `use:tooltip`

Attach a tooltip directly to any element.

**Props:**

| Prop              | Type                                     | Default       | Description                  |
| ----------------- | ---------------------------------------- | ------------- | ---------------------------- |
| `backgroundColor` | `string`                                 | `#333`        | Tooltip background color     |
| `color`           | `string`                                 | `#fff`        | Text color                   |
| `borderColor`     | `string`                                 | `transparent` | Border color                 |
| `borderWidth`     | `string`                                 | `0`           | Border thickness             |
| `fontSize`        | `string`                                 | `12px`        | Text size                    |
| `position`        | `'top' \| 'bottom' \| 'left' \| 'right'` | `bottom`      | Tooltip position             |
| `offset`          | `number`                                 | `12`          | Distance from target element |
| `delay`           | `number`                                 | `100`         | Delay before showing tooltip |

---

#### `createTipster(defaults)`

Create a reusable tooltip directive with shared defaults.

```js
const myTooltip = createTipster({
	backgroundColor: '#222',
	color: '#fff',
	position: 'top'
});
```

Then use it anywhere:

```svelte
<a use:myTooltip={{ offset: 10 }} title="Hello!">Hover me</a>
```

---

### 🧠 How It Works

Tipster:

1. Reads the element’s `title` attribute
2. Creates a Svelte tooltip component dynamically
3. Tracks mouse movement & viewport resizing
4. Cleans up everything on unmount

Lightweight, no dependencies, and works seamlessly in any Svelte project 💪

### 🤝 Contributing

Got an idea? Found a bug?
PRs and issues are always welcome 💙

```bash
git clone https://github.com/mostafa-kheibary/Tipster
cd Tipster
pnpm install
pnpm dev
```

---

### 📜 License

**MIT** — do whatever you want, just don’t remove the credit 🙃
