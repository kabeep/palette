import { type Assertion, describe, expect, it } from 'vitest';
import * as fns from '../../src';

const ANSI_FOREGROUND_BASE_OFFSET = 30;
const ANSI_BRIGHT_FOREGROUND_OFFSET = 60;

const ANSI_16_FOREGROUND_COLOR_LIST = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
];

const shiftString = (input: string) => input.split(' ').shift() as string;

const createAssertion =
    (isBright = false) =>
    (input: string): Assertion =>
        // @ts-expect-error: TS7053 use the it.each
        expect(fns[`${shiftString(input)}${isBright ? 'Bright' : ''}`](input));

const createExpected =
    (isBright = false) =>
    (open: number, input: string, close: number) => {
        const normalized = input.replaceAll(`\x1b[${close}m`, `\x1b[${open}m`);
        return createAssertion(isBright)(input).toStrictEqual(
            `\x1b[${open}m${normalized}\x1b[${close}m`,
        );
    };

describe('Foreground Color', () => {
    it.each(
        [
            ...ANSI_16_FOREGROUND_COLOR_LIST,
            'gray',
            'red with closed\x1b[39m ANSI',
            'green with open\x1b[32m & closed\x1b[39m ANSI',
        ].map((input) => {
            const index = ANSI_16_FOREGROUND_COLOR_LIST.findIndex(
                (item) => item === shiftString(input),
            );

            return [
                ANSI_FOREGROUND_BASE_OFFSET + (~index ? index : 60),
                input,
                39,
            ];
        }),
    )('\x1b[%im%s\x1b[39m', createExpected());
});

describe('Bright Foreground Color', () => {
    it.each(
        [
            ...ANSI_16_FOREGROUND_COLOR_LIST,
            'red with closed\x1b[39m ANSI',
            'green with open\x1b[92m & closed\x1b[39m ANSI',
        ]
            .slice(1)
            .map((input) => {
                const index = ANSI_16_FOREGROUND_COLOR_LIST.findIndex(
                    (item) => item === shiftString(input),
                );

                return [
                    ANSI_FOREGROUND_BASE_OFFSET +
                        ANSI_BRIGHT_FOREGROUND_OFFSET +
                        (~index ? index : 60),
                    input,
                    39,
                ];
            }),
    )('\x1b[%im%s\x1b[39m', createExpected(true));
});
