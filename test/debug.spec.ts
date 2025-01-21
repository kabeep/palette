import { afterEach, describe, expect, it, vi } from 'vitest';
import { rgb } from '../src';

describe('createAnsi16', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('With color supported', () => {
        vi.spyOn(
            require('node:tty').WriteStream.prototype,
            'hasColors',
        ).mockReturnValue(true);

        expect(rgb(255, 255, 255)('debug')).toStrictEqual(
            '\x1b[38;2;255;255;255mdebug\x1b[39m',
        );
    });

    it('Without color supported', () => {
        vi.spyOn(
            require('node:tty').WriteStream.prototype,
            'hasColors',
        ).mockReturnValue(true);

        expect(rgb(255, 255, 255)('debug')).toStrictEqual('debug');
    });
});
