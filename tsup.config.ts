import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    target: ['es2015'],
    outDir: 'dist',
    bundle: true,
    clean: !opts.watch,
    minify: false,
    treeshake: false,
    sourcemap: false,
    splitting: false,
    cjsInterop: true,
    legacyOutput: false,
    replaceNodeEnv: true,
    dts: true,
}));
