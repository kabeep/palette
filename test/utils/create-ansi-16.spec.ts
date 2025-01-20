import { afterEach, describe, expect, it, vi } from 'vitest';
import { createAnsi16 } from '../../src';
import * as constants from '../../src/constants';

describe('createAnsi16', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('With color supported', () => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );

        expect(createAnsi16()(0)).toStrictEqual('\x1b[0m');
        expect(createAnsi16(10)(0)).toStrictEqual('\x1b[10m');
    });

    it('Without color supported', () => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            false,
        );

        expect(createAnsi16()(0)).toStrictEqual('');
    });
});
