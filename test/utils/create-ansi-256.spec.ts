import { afterEach, describe, expect, it, vi } from 'vitest';
import { createAnsi256 } from '../../src';
import * as constants from '../../src/constants';

describe('createAnsi256', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('With color supported', () => {
        vi.spyOn(constants, 'IS_256_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );

        expect(createAnsi256()(0)).toStrictEqual('\x1b[38;5;0m');
        expect(createAnsi256(10)(0)).toStrictEqual('\x1b[48;5;0m');
    });

    it('Without color supported', () => {
        vi.spyOn(constants, 'IS_256_COLORS_SUPPORTED', 'get').mockReturnValue(
            false,
        );

        expect(createAnsi256()(0)).toStrictEqual('');
    });
});
