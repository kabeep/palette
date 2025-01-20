import { createAnsi16, createPalette } from '../utils';

const factory = createAnsi16();

const createModifier = (open: number, close: number) =>
    createPalette(factory(open), factory(close));

export const reset = createModifier(0, 0);
export const bold = createModifier(1, 22);
export const dim = createModifier(2, 22);
export const italic = createModifier(3, 23);
export const underline = createModifier(4, 24);
export const overline = createModifier(53, 55);
export const inverse = createModifier(7, 27);
export const hidden = createModifier(8, 28);
export const strikethrough = createModifier(9, 29);
