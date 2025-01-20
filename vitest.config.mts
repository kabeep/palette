import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ['verbose'],
        include: ['test/**/*.spec.ts'],
        // Speed up tests, but also it's a workaround for the browser issue:
        // https://github.com/vitest-dev/vitest/issues/5382
        isolate: false,
        coverage: {
            provider: 'istanbul',
            include: ['src'],
        },
        benchmark: {
            include: ['performance/**/*.perf.ts'],
        },
    },
});
