import { get, type Writable } from 'svelte/store';
import type { Position } from '../types/index.js';

export const calculateTooltipPosition = (
	element: HTMLElement,
	positionWritable: Writable<Position>,
	offset: number,
	id?: string
) => {
	let position = get(positionWritable);
	const tooltip = document.getElementById(`tipster-${id}`);
	if (!tooltip) return { x: 0, y: 0 };
	const { width: tw, height: th } = tooltip.getBoundingClientRect();
	const { top, left, width: ew, height: eh } = element.getBoundingClientRect();

	let x = 0;
	let y = 0;

	const overflowsRight = left + ew + tw > window.innerWidth;
	const overflowsLeft = left - tw < 0;
	const overflowsTop = top - th < 0;
	const overflowsBottom = top + eh + th > window.innerHeight;

	if (['top', 'bottom'].includes(position) && overflowsTop && overflowsBottom)
		position = overflowsRight ? 'left' : 'right';
	else if (['left', 'right'].includes(position) && overflowsLeft && overflowsRight)
		position = 'bottom';
	else {
		if (overflowsTop && position === 'top') position = 'bottom';
		else if (overflowsBottom && position == 'bottom') position = 'top';
		else if (overflowsRight && position === 'right') position = 'left';
		else if (overflowsLeft && position === 'left') position = 'right';
	}

	positionWritable.set(position);
	switch (position) {
		case 'top':
			x = left + ew / 2 - tw / 2;
			y = top - th - offset;
			break;

		case 'bottom':
			x = left + ew / 2 - tw / 2;
			y = top + eh + offset;
			break;

		case 'left':
			x = left - tw - offset;
			y = top + eh / 2 - th / 2;
			break;

		case 'right':
			x = left + ew + offset;
			y = top + eh / 2 - th / 2;
			break;
	}

	return { x, y };
};
