import { createAnsi16, createPalette } from '../utils';

const factory = createAnsi16();

const createBackground = (open: number) =>
    createPalette(factory(open), factory(49));

export const bgBlack = createBackground(40);
export const bgRed = createBackground(41);
export const bgGreen = createBackground(42);
export const bgYellow = createBackground(43);
export const bgBlue = createBackground(44);
export const bgMagenta = createBackground(45);
export const bgCyan = createBackground(46);
export const bgWhite = createBackground(47);
export const bgGray = createBackground(100);

export const bgRedBright = createBackground(101);
export const bgGreenBright = createBackground(102);
export const bgYellowBright = createBackground(103);
export const bgBlueBright = createBackground(104);
export const bgMagentaBright = createBackground(105);
export const bgCyanBright = createBackground(106);
export const bgWhiteBright = createBackground(107);
