import { ANSI_BACKGROUND_OFFSET } from '../constants';
import { createAnsi16, createAnsi16m, createPalette } from '../utils';

const createRgb = (offset = 0) => {
    const openFactory = createAnsi16m(offset);
    const closeFactory = createAnsi16(offset);
    return (red: number, green: number, blue: number) =>
        createPalette(openFactory(red, green, blue), closeFactory(39));
};

export const rgb = createRgb();
export const bgRgb = createRgb(ANSI_BACKGROUND_OFFSET);
