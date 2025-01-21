import { type Assertion, beforeAll, describe, expect, it, vi } from 'vitest';
import { bgHex, hex, hexToRgb } from '../../src';
import * as constants from '../../src/constants';

const HEX_TESTING_LIST: [number, number, number, string][] = [
    'ff0000',
    '00ff00',
    '0000ff',
    '#fff',
    '#000',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
].map((item) => [...hexToRgb(item), item]);

const createAssertion =
    (isBg = false) =>
    (input: string): Assertion =>
        expect((isBg ? bgHex : hex)(input)(input));

const createExpected =
    (offset = 0) =>
    (r: number, g: number, b: number, input: string) => {
        return createAssertion(!!offset)(input).toStrictEqual(
            `\x1b[${38 + offset};2;${r};${g};${b}m${input}\x1b[${39 + offset}m`,
        );
    };

describe('Hex Foreground', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(HEX_TESTING_LIST)(
        '\x1b[38;2;%i;%i;%im%s\x1b[39m',
        createExpected(0),
    );
});

describe('Hex Background', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(HEX_TESTING_LIST)(
        '\x1b[48;2;%i;%i;%im%s\x1b[49m',
        createExpected(10),
    );
});
