import { afterEach, describe, expect, it, vi } from 'vitest';
import { isColorSupported } from '../../src';

describe('isColorSupported', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should return true when hasColors is available and returns true', () => {
        vi.spyOn(
            require('node:tty').WriteStream.prototype,
            'hasColors',
        ).mockReturnValue(true);

        expect(isColorSupported()).toBe(true);
    });

    it('should return false when hasColors is available and returns false', () => {
        vi.spyOn(
            require('node:tty').WriteStream.prototype,
            'hasColors',
        ).mockReturnValue(false);

        expect(isColorSupported()).toBe(false);
    });

    it('should return false when hasColors is not available', () => {
        vi.spyOn(
            require('node:tty').WriteStream.prototype,
            'hasColors',
        ).mockReturnValue(undefined);

        expect(isColorSupported()).toBe(false);
    });

    it('should return false when tty is not available', () => {
        vi.spyOn(require('node:tty'), 'WriteStream', 'get').mockReturnValue(
            undefined,
        );

        expect(isColorSupported()).toBe(false);
    });
});
