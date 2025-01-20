import { afterEach, describe, expect, it, vi } from 'vitest';
import { hexToRgb } from '../../src';

describe('hexToRgb', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should convert a 6-digit hex color to RGB correctly', () => {
        expect(hexToRgb('#ff0000')).toEqual([255, 0, 0]);
        expect(hexToRgb('#00ff00')).toEqual([0, 255, 0]);
        expect(hexToRgb('#0000ff')).toEqual([0, 0, 255]);
    });

    it('should convert a 3-digit hex color to RGB correctly', () => {
        expect(hexToRgb('#f00')).toEqual([255, 0, 0]);
        expect(hexToRgb('#0f0')).toEqual([0, 255, 0]);
        expect(hexToRgb('#00f')).toEqual([0, 0, 255]);
    });

    it('should return [0, 0, 0] for invalid hex color', () => {
        expect(hexToRgb('#gggggg')).toEqual([0, 0, 0]);
        expect(hexToRgb('InvalidHex')).toEqual([0, 0, 0]);
    });

    it('should ignore the "#" character if the hex is provided without it', () => {
        expect(hexToRgb('ff0000')).toEqual([255, 0, 0]);
        expect(hexToRgb('00ff00')).toEqual([0, 255, 0]);
        expect(hexToRgb('0000ff')).toEqual([0, 0, 255]);
    });

    it('should return [0, 0, 0] for an empty string or null input', () => {
        expect(hexToRgb('')).toEqual([0, 0, 0]);
        expect(hexToRgb(null as unknown as string)).toEqual([0, 0, 0]);
    });
});
