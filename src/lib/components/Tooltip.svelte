<script lang="ts">
	import type { Snippet } from 'svelte';
	import { type Attachment, createAttachmentKey } from 'svelte/attachments';
	import {
		arrow,
		autoUpdate,
		computePosition,
		flip,
		offset as offsetFunction,
		type Placement,
		shift
	} from '@floating-ui/dom';
	import type { ClassValue } from 'clsx';
	import { cn } from '$lib/utils/cn.js';

	interface Position {
		top: null | number;
		right: null | number;
		bottom: null | number;
		left: null | number;
	}

	type TooltipChildProps = {
		onmouseenter: () => void;
		onmouseleave: () => void;
		onfocus: () => void;
		onblur: () => void;
	} & {
		[key in ReturnType<typeof createAttachmentKey>]: (node: HTMLElement) => void;
	};

	interface TooltipProps {
		text: Snippet<[]> | string;
		children: Snippet<[TooltipChildProps]>;
		placement?: Placement;
		offset?: number;
		class?: ClassValue;
		arrowClass?: ClassValue;
		delay?: number;
		shouldShowTooltip?: boolean;
	}

	const {
		children,
		placement: placementProp = 'top',
		offset =8,
		delay = 0,
		text,
		shouldShowTooltip,
		...props
	}: TooltipProps = $props();

	let floatingElement = $state<HTMLDivElement>();
	let anchorElement = $state<Element>();
	let arrowElement = $state<Element>();
	let isTooltipVisible = $state(false);
	let floatingPosition = $state<Position>({ top: 0, left: 0, right: null, bottom: null });
	let arrowPosition = $state<Position>({ top: 0, left: 0, right: null, bottom: null });
	let delayTimeoutId: ReturnType<typeof setTimeout>;

	const handleRenderTooltip: Attachment = (node) => {
		if (!floatingElement) return;
		anchorElement = node;

		const cleanup = autoUpdate(anchorElement, floatingElement, updateTooltip);

		return () => {
			cleanup();
		};
	};

	const updateTooltip = () => {
		if (!floatingElement || !anchorElement || !arrowElement) return;

		computePosition(anchorElement, floatingElement, {
			placement: placementProp,
			strategy: 'fixed',
			middleware: [
				offsetFunction(offset),
				flip(),
				shift({ padding: offset }),
				arrow({ element: arrowElement })
			]
		}).then(({ x, y, middlewareData, placement: tooltipPlacement }) => {
			if (!floatingElement || !arrowElement || !middlewareData.arrow) return;
			const { x: arrowX, y: arrowY } = middlewareData.arrow;
			floatingPosition.top = y;
			floatingPosition.left = x;

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right'
			}[tooltipPlacement.split('-')[0]] as unknown as keyof typeof arrowPosition;

			arrowPosition.left = arrowX || null;
			arrowPosition.top = arrowY || null;
			arrowPosition.right = null;
			arrowPosition.bottom = null;
			arrowPosition[staticSide] = -4;
		});
	};
	const showTooltip = () => {
		console.log('run')
		if (delayTimeoutId) clearTimeout(delayTimeoutId);
		delayTimeoutId = setTimeout(() => {
			isTooltipVisible = true;
			updateTooltip();
		}, delay);
	};
	const hideTooltip = () => {
		if (delayTimeoutId) clearTimeout(delayTimeoutId);
		isTooltipVisible = false;
	};
</script>

	<div
		bind:this={floatingElement}
		style:--left="{floatingPosition.left}px"
		style:--top="{floatingPosition.top}px"
		class={cn([
			'z-[1000000] invisible fixed top-(--top) left-(--left) w-max scale-x-90 rounded-lg bg-zinc-800',
			'max-w-100',
			'px-4 py-1 text-sm font-semibold text-white opacity-0 transition-[transform,scale,opacity,visibility] duration-300',
			{ 'visible scale-x-100 opacity-100': shouldShowTooltip ?? isTooltipVisible },
			props.class
		])}
	>
		{#if typeof text === 'string'}
			{text}
		{:else}
			{@render text()}
		{/if}
		<div
			style:--left="{arrowPosition.left}px"
			style:--right="{arrowPosition.right}px"
			style:--top="{arrowPosition.top}px"
			style:--bottom="{arrowPosition.bottom}px"
			class={cn([
				'z-[1000000] fixed top-(--top) right-(--right) bottom-(--bottom) left-(--left) h-2.5 w-2.5 rotate-45 rounded-[1.5px] bg-zinc-800',
				props.arrowClass
			])}
			bind:this={arrowElement}
		></div>
	</div>

{@render children({
	[createAttachmentKey()]: (node) => handleRenderTooltip(node),
	onmouseenter: showTooltip,
	onmouseleave: hideTooltip,
	onfocus: showTooltip,
	onblur: hideTooltip
})}
