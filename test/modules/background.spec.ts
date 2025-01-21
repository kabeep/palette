import { type Assertion, beforeAll, describe, expect, it, vi } from 'vitest';
import * as fns from '../../src';
import * as constants from '../../src/constants';

const ANSI_BACKGROUND_BASE_OFFSET = 40;
const ANSI_BRIGHT_BACKGROUND_OFFSET = 60;

const ANSI_16_BACKGROUND_COLOR_LIST = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
];

const startCase = (input: string) =>
    input.slice(0, 1).toUpperCase() + input.slice(1);

const shiftString = (input: string) => input.split(' ').shift() as string;

const createAssertion =
    (isBright = false) =>
    (input: string): Assertion =>
        expect(
            // @ts-expect-error: TS7053 use the it.each
            fns[
                `bg${startCase(shiftString(input))}${isBright ? 'Bright' : ''}`
            ](input),
        );

const createExpected =
    (isBright = false) =>
    (open: number, input: string, close: number) => {
        const normalized = input.replaceAll(`\x1b[${close}m`, `\x1b[${open}m`);
        return createAssertion(isBright)(input).toStrictEqual(
            `\x1b[${open}m${normalized}\x1b[${close}m`,
        );
    };

describe('Background Color', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(
        [
            ...ANSI_16_BACKGROUND_COLOR_LIST,
            'gray',
            'red with closed\x1b[49m ANSI',
            'green with open\x1b[42m & closed\x1b[49m ANSI',
        ].map((input) => {
            const index = ANSI_16_BACKGROUND_COLOR_LIST.findIndex(
                (item) => item === shiftString(input),
            );

            return [
                ANSI_BACKGROUND_BASE_OFFSET + (~index ? index : 60),
                input,
                49,
            ];
        }),
    )('\x1b[%im%s\x1b[49m', createExpected());
});

describe('Bright Background Color', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(
        [
            ...ANSI_16_BACKGROUND_COLOR_LIST,
            'red with closed\x1b[49m ANSI',
            'green with open\x1b[102m & closed\x1b[49m ANSI',
        ]
            .slice(1)
            .map((input) => {
                const index = ANSI_16_BACKGROUND_COLOR_LIST.findIndex(
                    (item) => item === shiftString(input),
                );

                return [
                    ANSI_BACKGROUND_BASE_OFFSET +
                        ANSI_BRIGHT_BACKGROUND_OFFSET +
                        (~index ? index : 60),
                    input,
                    49,
                ];
            }),
    )('\x1b[%im%s\x1b[49m', createExpected(true));
});
