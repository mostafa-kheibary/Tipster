import Tooltip from '$components/Tooltip.svelte';
import { writable } from 'svelte/store';
import { mount, unmount } from 'svelte';
import { generateUid } from '$utils/generateUid.js';
import { calculateTooltipPosition } from '$utils/calculateTooltipPosition.js';
import type { Position } from '../types/index.js';

interface Props {
	position?: Position;
	delay?: number;
	backgroundColor?: string;
	color?: string;
	offset?: number;
	borderWidth?: string;
	borderColor?: string;
	fontSize?: string;
}

export const tooltip = (element: HTMLElement, props?: Props) => {
	const title = element.getAttribute('title');
	if (!title) return;
	const id = generateUid();
	const isTooltipShowing = writable(false);
	const position = writable<Position>(props?.position || 'bottom');
	const targetPosition = writable<{ x: number; y: number }>(
		calculateTooltipPosition(element, position, props?.offset || 12, id)
	);

	const component = mount(Tooltip, {
		target: document.getElementById('tipster') as HTMLElement,
		props: {
			id,
			color: props?.color,
			backgroundColor: props?.backgroundColor,
			borderColor: props?.borderColor,
			borderWidth: props?.borderWidth,
			fontSize: props?.fontSize,
			text: title,
			isTooltipShowing,
			position,
			targetPosition
		}
	});

	element.style.position = 'relative';
	element.removeAttribute('title');
	let timeout: ReturnType<typeof setTimeout> | null = null;
	window.addEventListener('mousemove', (e) => {
		const target = e.target as HTMLElement;
		if (timeout) clearTimeout(timeout);

		if (element.contains(target)) {
			timeout = setTimeout(() => {
				targetPosition.set(calculateTooltipPosition(element, position, props?.offset || 12, id));
				isTooltipShowing.set(true);
			}, props?.delay || 100);
		} else {
			isTooltipShowing.set(false);
		}
	});

	const onWindowResize = () => {
		targetPosition.set(calculateTooltipPosition(element, position, props?.offset || 12, id));
	};
	window.addEventListener('resize', onWindowResize);
	return {
		destroy() {
			unmount(component);
			window.removeEventListener('resize', onWindowResize);
		}
	};
};
