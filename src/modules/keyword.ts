import { CSS_KEYWORDS } from '../constants';
import { bgHex, hex } from './hex';

export type KeywordName = keyof typeof CSS_KEYWORDS;

const keywords = new Map(Object.entries(CSS_KEYWORDS)) as Map<
    KeywordName,
    string
>;

export const validKeyword = (key: string) => keywords.has(key as KeywordName);
export const keyword = (key: KeywordName) => hex(keywords.get(key) ?? '');
export const bgKeyword = (key: KeywordName) => bgHex(keywords.get(key) ?? '');
