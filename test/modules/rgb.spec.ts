import { afterEach, type Assertion, beforeAll, describe, expect, it, vi } from 'vitest';
import { bgRgb, rgb } from '../../src';
import * as constants from '../../src/constants';

const createAssertion =
    (isBg = false) =>
    ([r, g, b]: number[], input: string): Assertion =>
        expect((isBg ? bgRgb : rgb)(r, g, b)(input));

const createExpected =
    (offset = 0) =>
    (r: number, g: number, b: number, input: string) => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );

        const normalized = input.replaceAll(
            `\x1b[${39 + offset}m`,
            `\x1b[${38 + offset};2;${r};${g};${b}m`,
        );
        return createAssertion(!!offset)([r, g, b], normalized).toStrictEqual(
            `\x1b[${38 + offset};2;${r};${g};${b}m${normalized}\x1b[${39 + offset}m`,
        );
    };

describe('RGB Foreground', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it.each([
        [255, 0, 0, 'red'],
        [0, 255, 0, 'green with closed\x1b[39m ANSI'],
        [0, 0, 255, 'blue with open\x1b[38;2;0;255;0m & closed\x1b[39m ANSI'],
    ])('\x1b[38;2;%i;%i;%im%s\x1b[39m', createExpected(0));
});

describe('RGB Background', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each([
        [255, 0, 0, 'red'],
        [0, 255, 0, 'green with closed\x1b[39m ANSI'],
        [0, 0, 255, 'blue with open\x1b[48;2;0;0;255m & closed\x1b[39m ANSI'],
    ])('\x1b[48;2;%i;%i;%im%s\x1b[49m', createExpected(10));
});
