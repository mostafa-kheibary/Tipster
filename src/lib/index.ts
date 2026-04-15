import Tooltip from './components/Tooltip.svelte';
import { writable } from 'svelte/store';
import { mount, unmount } from 'svelte';
import { generateUid } from './utils/generateUid.js';
import { calculateTooltipPosition } from './utils/calculateTooltipPosition.js';
import type { Position } from '../types/index.js';

interface Props {
	position?: Position;
	delay?: number;
	offset?: number;
	title?: string | null;
}

export const tooltip = (element: HTMLElement, props?: Props) => {
	const currentTitle =
		props?.title !== undefined ? props.title : element.getAttribute('data-title');

	const id = generateUid();
	const isTooltipShowing = writable(false);
	const position = writable<Position>(props?.position || 'bottom');
	const text = writable(currentTitle || '');
	const targetPosition = writable<{ x: number; y: number }>(
		calculateTooltipPosition(element, position, props?.offset || 12, id)
	);

	let targetEl = document.getElementById('tipster') as HTMLElement;
	if (!targetEl) {
		targetEl = document.body; // Fallback if the container doesn't exist
	}

	const component = mount(Tooltip, {
		target: targetEl,
		props: {
			id,
			text,
			isTooltipShowing,
			position,
			targetPosition
		}
	});

	element.style.position = 'relative';
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const handleMouseMove = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (timeout) clearTimeout(timeout);

		if (element.contains(target) && currentTitle) {
			timeout = setTimeout(() => {
				if (element.getAttribute('data-title') !== undefined) {
					text.set(element.getAttribute('data-title') || '');
					if (!element.getAttribute('data-title')) isTooltipShowing.set(false);
				}

				targetPosition.set(calculateTooltipPosition(element, position, props?.offset || 12, id));
				isTooltipShowing.set(true);
			}, props?.delay || 100);
		} else {
			isTooltipShowing.set(false);
		}
	};

	const onWindowResize = () => {
		targetPosition.set(calculateTooltipPosition(element, position, props?.offset || 12, id));
	};

	window.addEventListener('mousemove', handleMouseMove);
	window.addEventListener('resize', onWindowResize);

	return {
		destroy() {
			unmount(component);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', onWindowResize);
			if (timeout) clearTimeout(timeout);
		}
	};
};

export const createTipster = (defaults: Partial<Props>) => {
	return (element: HTMLElement, props?: Props) => {
		return tooltip(element, { ...defaults, ...props });
	};
};
