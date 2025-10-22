import { type Assertion, describe, expect, it } from 'vitest';
import { bgKeyword, CSS_KEYWORDS, hexToRgb, keyword, type KeywordName, validKeyword } from '../../src';

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
    it.each(KEYWORD_TESTING_LIST)(
        '\x1b[38;2;%i;%i;%im%s\x1b[39m',
        createExpected(0),
    );
});

describe('Background Keyword', () => {
    it.each(KEYWORD_TESTING_LIST)(
        '\x1b[48;2;%i;%i;%im%s\x1b[49m',
        createExpected(10),
    );
});

const KEYWORD_VALIDATE_TESTING_LIST: [string, boolean][] = [
    ['', false],
    ['white', true],
    ['maroon', true],
    ['darkblue', true],
    ['darkolivegreen', true],
    ['lightcoral', true],
    ['palette', false],
    ['whiter', false],
];

describe('Valid Keyword', () => {
    it.each(KEYWORD_VALIDATE_TESTING_LIST)(
        'Is keyword "%s" valid: %s',
        (keyword: string, isValid: boolean) =>
            expect(validKeyword(keyword)).toBe(isValid),
    );
});
