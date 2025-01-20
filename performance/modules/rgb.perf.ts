import chalk from 'chalk';
import { bench, describe } from 'vitest';
import * as palette from '../../src';

describe('rgb', () => {
    bench('palette', () => {
        palette.rgb(0, 0, 0)('rgb');
    });

    bench('chalk', () => {
        chalk.rgb(0, 0, 0)('rgb');
    });
});
