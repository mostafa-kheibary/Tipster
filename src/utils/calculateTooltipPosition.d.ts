import { type Writable } from 'svelte/store';
import type { Position } from '../types/index.js';
export declare const calculateTooltipPosition: (element: HTMLElement, positionWritable: Writable<Position>, offset: number, id?: string) => {
    x: number;
    y: number;
};
