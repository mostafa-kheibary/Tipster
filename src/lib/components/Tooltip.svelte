<script lang="ts">
	import { cx } from '../utils/cx.js';
	import type { Writable } from 'svelte/store';
	import type { Position } from '../../types/index.js';

	interface TooltipProps {
		id: string;
		text: string;
		position: Writable<Position>;
		isTooltipShowing: Writable<boolean>;
		targetPosition: Writable<{ x: number; y: number }>;
		color?: string;
		backgroundColor?: string;
		borderWidth?: string;
		borderColor?: string;
		fontSize?: string;
	}

	let {
		id,
		targetPosition,
		isTooltipShowing,
		color = '#000',
		backgroundColor = '#fff',
		position,
		borderColor,
		borderWidth,
		fontSize,
		text
	}: TooltipProps = $props();

	const arrowPosition = {
		bottom: 'tipster-arrow--bottom',
		left: 'tipster-arrow--left',
		top: 'tipster-arrow--top',
		right: 'tipster-arrow--right'
	};

	let isActive = $derived($isTooltipShowing ? true : false);
</script>

<div
	style="
  --background-color: {backgroundColor};
  --color: {color};
  --font-size: {fontSize};
  left: {$targetPosition.x}px;
  top: {$targetPosition.y}px;
  border: solid {borderWidth || '0'} {borderColor};
  "
	id="tipster-{id}"
	class={['tipster', `tipster--${$position}`, cx({ 'tipster--active': isActive })]}
>
	<svg
		class={['tipster-arrow', arrowPosition[$position]]}
		width="18"
		height="12"
		viewBox="0 0 18 12"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		fill={backgroundColor}
		stroke={borderColor}
		stroke-width={borderWidth}
		stroke-linejoin="arcs"
	>
		<path d="M0 12 L9 0 L18 12 Z" fill="#fff" stroke="none" />
		<path d="M0 12 L9 0 L18 12" />
	</svg>

	<div class="tipster__text">{text}</div>
</div>

<style>
	:global {
		.tipster {
			font-family:
				system-ui,
				-apple-system,
				BlinkMacSystemFont,
				'Segoe UI',
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				'Open Sans',
				'Helvetica Neue',
				sans-serif;

			position: fixed;
			display: inline-block;
			max-width: 256px;
			pointer-events: none;
			background-clip: padding-box;
			opacity: 0;
			z-index: 100000;
			padding: 10px 8px;
			border-radius: 6px;
			transition:
				opacity 0.2s ease,
				transform 0.2s ease;
			box-sizing: border-box;
			font-size: var(--font-size);
			background-color: var(--background-color);
			color: var(--color);
		}
		.tipster--bottom {
			transform: translateY(4px);
		}
		.tipster--top {
			transform: translateY(-4px);
		}
		.tipster--left {
			transform: translateX(4px);
		}
		.tipster--right {
			transform: translateX(-4px);
		}
		.tipster--active {
			opacity: 1;
			transform: translateY(0) translateX(0);
		}

		.tipster__text {
			color: inherit;
			font-weight: 400;
			text-align: start;
			font-size: inherit;
			width: 100%;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		/* arrow */
		.tipster-arrow {
			position: absolute;
			z-index: -1;
		}
		.tipster-arrow--top {
			top: 100%;
			left: 50%;
			transform: translateX(-50%) rotate(-180deg);
		}
		.tipster-arrow--bottom {
			bottom: 100%;
			left: 50%;
			transform: translateX(-50%) rotate(0deg);
		}
		.tipster-arrow--right {
			top: 50%;
			right: calc(100% - 3px);
			transform: translateY(-50%) rotate(270deg);
		}
		.tipster-arrow--left {
			top: 50%;
			left: calc(100% - 3px);
			transform: translateY(-50%) rotate(90deg);
		}
	}
</style>
