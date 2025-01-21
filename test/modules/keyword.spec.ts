import { type Assertion, beforeAll, describe, expect, it, vi } from 'vitest';
import {
    CSS_KEYWORDS,
    type KeywordName,
    bgKeyword,
    hexToRgb,
    keyword,
} from '../../src';
import * as constants from '../../src/constants';

const KEYWORD_TESTING_LIST: [number, number, number, string][] = [
    'red',
    'green',
    'blue',
    'white',
    'black',
    'yellow',
    'magenta',
    'cyan',
    'InvalidKeyword',
].map((item) => [...hexToRgb(CSS_KEYWORDS[item as KeywordName] ?? ''), item]);

const createAssertion =
    (isBg = false) =>
    (input: string): Assertion =>
        expect((isBg ? bgKeyword : keyword)(input as KeywordName)(input));

const createExpected =
    (offset = 0) =>
    (r: number, g: number, b: number, input: string) => {
        return createAssertion(!!offset)(input).toStrictEqual(
            `\x1b[${38 + offset};2;${r};${g};${b}m${input}\x1b[${39 + offset}m`,
        );
    };

describe('Foreground Keyword', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(KEYWORD_TESTING_LIST)(
        '\x1b[38;2;%i;%i;%im%s\x1b[39m',
        createExpected(0),
    );
});

describe('Background Keyword', () => {
    beforeAll(() => {
        vi.spyOn(constants, 'IS_16M_COLORS_SUPPORTED', 'get').mockReturnValue(
            true,
        );
    });

    it.each(KEYWORD_TESTING_LIST)(
        '\x1b[48;2;%i;%i;%im%s\x1b[49m',
        createExpected(10),
    );
});
