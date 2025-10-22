import { type Assertion, describe, expect, it } from 'vitest';
import * as fns from '../../src';

const createAssertion = (fn: string, input: string): Assertion =>
    // @ts-expect-error: TS7053 use the it.each
    expect(fns[fn](input));

const createExpected = (open: number, input: string, close: number) => {
    const fn = input.split(' ').shift() as string;
    const normalized = input.replaceAll(`\x1b[${close}m`, `\x1b[${open}m`);
    return createAssertion(fn, input).toStrictEqual(
        `\x1b[${open}m${normalized}\x1b[${close}m`,
    );
};

describe('Modifier Keyword', () => {
    it.each([
        [0, 'reset', 0],
        [1, 'bold', 22],
        [2, 'dim', 22],
        [3, 'italic', 23],
        [4, 'underline', 24],
        [53, 'overline', 55],
        [7, 'inverse', 27],
        [8, 'hidden', 28],
        [9, 'strikethrough', 29],
        [4, 'underline \x1b[24m with closed ANSI', 24],
        [2, 'dim \x1b[4m with open \x1b[0m & closed ANSI', 22],
    ])('\x1b[%im%s\x1b[%im', createExpected);
});
