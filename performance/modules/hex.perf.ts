import chalk from 'chalk';
import kuler from 'kuler';
import { bench, describe } from 'vitest';
import * as palette from '../../src';

describe('hex', () => {
    bench('palette', () => {
        palette.hex('#ffffff')('hex');
    });

    bench('chalk', () => {
        chalk.hex('#ffffff')('hex');
    });

    bench('kuler', () => {
        kuler('hex', '#ffffff');
    });
});
