import type { Snippet } from 'svelte';
import { createAttachmentKey } from 'svelte/attachments';
import { type Placement } from '@floating-ui/dom';
import type { ClassValue } from 'clsx';
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
declare const Tooltip: import("svelte").Component<TooltipProps, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
