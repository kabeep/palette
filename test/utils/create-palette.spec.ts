import { afterEach, describe, expect, it, vi } from 'vitest';
import { createPalette } from '../../src';

describe('createPalette', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should return input as-is when open or close is not provided', () => {
        const palette = createPalette('', '');
        expect(palette('test')).toBe('test');
    });

    it('should wrap input with open and close when close is not found in input', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        expect(palette('test')).toBe('\x1b[31mtest\x1b[0m');
    });

    it('should handle nested colors correctly', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        const input = 'test\x1b[0mmore\x1b[31mtext\x1b[0m';
        const expected = '\x1b[31mtest\x1b[31mmore\x1b[31mtext\x1b[31m\x1b[0m';
        expect(palette(input)).toBe(expected);
    });

    it('should return the input as-is when close is not found for number inputs', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        expect(palette('123')).toBe('\x1b[31m123\x1b[0m');
    });

    it('should handle numbers in input and wrap correctly with open and close', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        expect(palette('123')).toBe('\x1b[31m123\x1b[0m');
    });

    it('should correctly handle multiple close characters', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        const input = 'start\x1b[0mmiddle\x1b[0mend';
        const expected = '\x1b[31mstart\x1b[31mmiddle\x1b[31mend\x1b[0m';
        expect(palette(input)).toBe(expected);
    });

    it('should handle edge cases like empty string input', () => {
        const palette = createPalette('\x1b[31m', '\x1b[0m');
        expect(palette('')).toBe('\x1b[31m\x1b[0m');
    });
});
