import ansiColors from 'ansi-colors';
import chalk from 'chalk';
import clc from 'cli-color';
import * as colorette from 'colorette';
import picocolors from 'picocolors';
import { bench, describe } from 'vitest';
import * as palette from '../../src';
import * as yoctocolors from 'yoctocolors';

describe('bgBlack', () => {
    bench('palette', () => {
        palette.bgBlack('bgBlack');
    });

    bench('ansi-colors', () => {
        ansiColors.bgBlack('bgBlack');
    });

    bench('chalk', () => {
        chalk.bgBlack('bgBlack');
    });

    bench('cli-color', () => {
        clc.bgBlack('bgBlack');
    })

    bench('colorette', () => {
        colorette.bgBlack('bgBlack');
    })

    bench('picocolors', () => {
        picocolors.bgBlack('bgBlack');
    });

    bench('yoctocolors', () => {
        yoctocolors.bgBlack('bgBlack');
    })
});
