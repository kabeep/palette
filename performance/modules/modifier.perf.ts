import ansiColors from 'ansi-colors';
import chalk from 'chalk';
import clc from 'cli-color';
import * as colorette from 'colorette';
import picocolors from 'picocolors';
import { bench, describe } from 'vitest';
import * as palette from '../../src';
import * as yoctocolors from 'yoctocolors';

describe('bold', () => {
    bench('palette', () => {
        palette.bold('bold');
    });

    bench('ansi-colors', () => {
        ansiColors.bold('bold');
    });

    bench('chalk', () => {
        chalk.bold('bold');
    });

    bench('cli-color', () => {
        clc.bold('bold');
    })

    bench('colorette', () => {
        colorette.bold('bold');
    })

    bench('picocolors', () => {
        picocolors.bold('bold');
    });

    bench('yoctocolors', () => {
        yoctocolors.bold('bold');
    })
});
