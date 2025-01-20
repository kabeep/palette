import { type Assertion, describe, expect, it } from 'vitest';
import { bgRgb, rgb } from '../../src';

const createAssertion =
    (isBg = false) =>
    ([r, g, b]: number[], input: string): Assertion =>
        expect((isBg ? bgRgb : rgb)(r, g, b)(input));

const createExpected =
    (offset = 0) =>
    (r: number, g: number, b: number, input: string) => {
        const normalized = input.replaceAll(
            `\x1b[${39 + offset}m`,
            `\x1b[${38 + offset};2;${r};${g};${b}m`,
        );
        return createAssertion(!!offset)([r, g, b], normalized).toStrictEqual(
            `\x1b[${38 + offset};2;${r};${g};${b}m${normalized}\x1b[${39 + offset}m`,
        );
    };

describe('RGB Foreground', () => {
    it.each([
        [255, 0, 0, 'red'],
        [0, 255, 0, 'green with closed\x1b[39m ANSI'],
        [0, 0, 255, 'blue with open\x1b[38;2;0;255;0m & closed\x1b[39m ANSI'],
    ])('\x1b[38;2;%i;%i;%im%s\x1b[39m', createExpected(0));
});

describe('RGB Background', () => {
    it.each([
        [255, 0, 0, 'red'],
        [0, 255, 0, 'green with closed\x1b[39m ANSI'],
        [0, 0, 255, 'blue with open\x1b[48;2;0;0;255m & closed\x1b[39m ANSI'],
    ])('\x1b[48;2;%i;%i;%im%s\x1b[49m', createExpected(10));
});
