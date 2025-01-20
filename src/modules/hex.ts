import { hexToRgb } from '../utils';
import { bgRgb, rgb } from './rgb';

export const hex = (hexString: string) => rgb(...hexToRgb(hexString));
export const bgHex = (hexString: string) => bgRgb(...hexToRgb(hexString));
