import { afterEach, describe, expect, it, vi } from 'vitest';
import { rgb } from '../src';
import * as constants from '../src/constants';

describe('createAnsi16', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('With color supported', () => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );

        expect(rgb(255, 255, 255)('debug')).toStrictEqual(
            '\x1b[38;2;255;255;255mdebug\x1b[39m',
        );
    });

    it('Without color supported', () => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            false,
        );
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            false,
        );

        expect(rgb(255, 255, 255)('debug')).toStrictEqual('debug');
    });
});
