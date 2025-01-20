import { afterEach, describe, expect, it, vi } from 'vitest';
import { createAnsi16m } from '../../src';
import * as constants from '../../src/constants';

describe('createAnsi16m', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('With color supported', () => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );

        expect(createAnsi16m()(0, 0, 0)).toStrictEqual('\x1b[38;2;0;0;0m');
        expect(createAnsi16m(10)(0, 0, 0)).toStrictEqual('\x1b[48;2;0;0;0m');
    });

    it('Without color supported', () => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            false,
        );

        expect(createAnsi16m()(0, 0, 0)).toStrictEqual('');
    });
});
