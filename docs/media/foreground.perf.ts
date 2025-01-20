import ansiColors from 'ansi-colors';
import chalk from 'chalk';
import clc from 'cli-color';
import * as colorette from 'colorette';
import picocolors from 'picocolors';
import { bench, describe } from 'vitest';
import * as palette from '../../src';
import * as yoctocolors from 'yoctocolors';

describe('black', () => {
    bench('palette', () => {
        palette.black('black');
    });

    bench('ansi-colors', () => {
        ansiColors.black('black');
    });

    bench('chalk', () => {
        chalk.black('black');
    });

    bench('cli-color', () => {
        clc.black('black');
    })

    bench('colorette', () => {
        colorette.black('black');
    })

    bench('picocolors', () => {
        picocolors.black('black');
    });

    bench('yoctocolors', () => {
        yoctocolors.black('black');
    })
});
