import { IS_16M_COLORS_SUPPORTED } from '../constants';

/**
 * Wraps RGB values, supporting millions of colors (16 million)
 */
function createAnsi16m(offset = 0) {
    if (!IS_16M_COLORS_SUPPORTED) return () => '';

    return (red: number, green: number, blue: number) =>
        `\x1b[${38 + offset};2;${red};${green};${blue}m`;
}

export default createAnsi16m;
