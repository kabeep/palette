import chalkPipe from 'chalk-pipe';
import { bench, describe } from 'vitest';
import * as palette from '../../src';

describe('cyan', () => {
    bench('palette', () => {
        palette.keyword('cyan')('keyword');
    });

    bench('chalk-pipe', () => {
        chalkPipe('cyan')('keyword');
    })
});
