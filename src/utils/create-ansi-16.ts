import { IS_16_COLORS_SUPPORTED } from '../constants';

/**
 * Wraps 16 ANSI color codes
 */
function createAnsi16(offset = 0) {
    if (!IS_16_COLORS_SUPPORTED) return () => '';

    return (code: number) => `\x1b[${code + offset}m`;
}

export default createAnsi16;
