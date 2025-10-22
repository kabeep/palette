module.exports = {
    $schema: 'https://typedoc.org/schema.json',
    entryPoints: ['./src/index.ts'],
    sort: ['source-order'],
    projectDocuments: ['./README.*.md', './performance/PERFORMANCE*.md', 'LICENSE'],
    skipErrorChecking: true,
    navigationLinks: {
        Docs: 'https://kabeep.github.io/palette/',
        GitHub: 'https://github.com/kabeep/palette',
        NPM: 'https://www.npmjs.com/package/@kabeep/palette',
    },
    plugin: [
        'typedoc-material-theme',
        'typedoc-plugin-mdn-links',
        'typedoc-plugin-missing-exports',
        'typedoc-plugin-include-example',
        // 'typedoc-plugin-inline-sources',
        'typedoc-plugin-replace-text',
        'typedoc-plugin-rename-documents',
        'typedoc-plugin-version-header',
    ],
    themeColor: '#18ffff',
    renameDocuments: {
        './README.zh-CN.md': '简体中文',
        './performance/PERFORMANCE.md': 'Benchmarking Report',
        './performance/PERFORMANCE.zh-CN.md': '基准测试报告',
    },
    replaceText: {
        inCodeCommentText: false,
        inCodeCommentTags: false,
        inMarkdown: true,
        replacements: [
            {
                pattern: 'README.md',
                replace: () => {
                    return '../index.html';
                },
            },
            {
                pattern: 'README.zh-CN.md',
                replace: () => {
                    return 'documents/____.html';
                },
            },
            {
                pattern: 'performance/PERFORMANCE.md',
                replace: () => {
                    return 'documents/Benchmarking_Report.html';
                },
            },
            {
                pattern: 'performance/PERFORMANCE.zh-CN.md',
                replace: () => {
                    return './______.html';
                },
            },
        ],
    },
};
