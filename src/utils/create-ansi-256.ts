import { IS_256_COLORS_SUPPORTED } from '../constants';

/**
 * Wraps 256 ANSI color codes
 */
function createAnsi256(offset = 0) {
    if (!IS_256_COLORS_SUPPORTED) return () => '';

    return (code: number) => `\x1b[${38 + offset};5;${code}m`;
}

export default createAnsi256;
