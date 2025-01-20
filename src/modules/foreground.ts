import { createAnsi16, createPalette } from '../utils';

const factory = createAnsi16();

const createForeground = (open: number) =>
    createPalette(factory(open), factory(39));

export const black = createForeground(30);
export const red = createForeground(31);
export const green = createForeground(32);
export const yellow = createForeground(33);
export const blue = createForeground(34);
export const magenta = createForeground(35);
export const cyan = createForeground(36);
export const white = createForeground(37);
export const gray = createForeground(90);

export const redBright = createForeground(91);
export const greenBright = createForeground(92);
export const yellowBright = createForeground(93);
export const blueBright = createForeground(94);
export const magentaBright = createForeground(95);
export const cyanBright = createForeground(96);
export const whiteBright = createForeground(97);
