<div align="center">

<h1>Palette</h1>

🎨 一个 FP 范式的 Node.js 库用来设置终端文本的颜色和样式。

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![BundlePhobia][bundle-phobia-image]][bundle-phobia-url]
[![CircleCI][circleci-image]][circleci-url]

[English][en-us-url] | 简体中文

</div>

## 📖 简介

> `chalk` 有友好的链式 API，但也是我认为它不足的地方，尽管 sindresorhus 的杰出工作尽可能缩小了包体积，
> 但我不认为核心问题在于 [为什么不换成更小的着色包？][chalk-faq-url]：
> - 不能树摇，不能以 FP 范式例如 pipe/compose 来编码。
> - 如果只需要着色红色失败和绿色成功信息，仍需要通过工厂函数创建完整的 `chalk`。
> - 在轻量场景中远不如静态 ANSI 字符串的性价比。

所以我创建了这个包，它和 `chalk` 一样支持 _ANSI 16 色_，_256 色_ 和 _16 百万真彩色_。

比起其他轻量包，除了基础的 ANSI 关键字，它还支持 _[十六进制数字表示法 (Hex)][hex-triplet-url]_ /
_[三原色光模式 (RGB)][rgb-model-url]_ / _[CSS 关键字][css-keywords-url]_。

但这不意味着它牺牲了 **体积** 和 **性能**，相反它在 [基准测试报告][perf-zh-cn-url] 中表现优异。
当然所有的着色包都已经足够快了，但如果你重视尺寸和性能， `@kabeep/palette` 是一个不错的选择。

查看 [文档][docs-url]。

## 📦 安装

```bash
npm install @kabeep/palette --save
```

```bash
yarn add @kabeep/palette
```

```bash
pnpm add @kabeep/palette
```

## ⚙️ 使用

**CommonJS**

```typescript
const pipe = require('lodash.flow');
const { bgRgb, hex, keyword, yellowBright } = require('@kabeep/palette');

const padding = (text: string) => ` ${text} `;
const palette = pipe(keyword('gold'), padding, bgRgb(255, 0, 0));

console.log(palette('Error'), yellowBright('Warning'), hex('#ff0000')('Message'));
```

**ESModule**

```typescript
import pipe from 'lodash.flow';
import { bgRgb, hex, keyword, yellowBright } from '@kabeep/palette';

const padding = (text: string) => ` ${text} `;
const palette = pipe(keyword('gold'), padding, bgRgb(255, 0, 0));

console.log(palette('Error'), yellowBright('Warning'), hex('#ff0000')('Message'));
```

## 🌈 样式

### 修饰符

- reset - 重置当前样式。
- bold - 粗体文本。
- dim - 降低文本不透明度。
- italic - 将文本设置为斜体 (未得到广泛支持)。
- underline - 文本下划线 (未得到广泛支持)。
- overline - 文本上划线 (未得到广泛支持)。
- inverse- 反转背景和前景色。
- hidden - 打印文本但使其不可见。
- strikethrough - 文本删除线 (未得到广泛支持)。

### 前景色

- black - 黑色文本
- red - 红色文本
- green - 绿色文本
- yellow - 黄色文本
- blue - 蓝色文本
- magenta - 品红色文本
- cyan - 青色文本
- white - 白色文本
- gray - 灰色文本
- redBright - 亮红色文本
- greenBright - 亮绿色文本
- yellowBright - 亮黄色文本
- blueBright - 亮蓝色文本
- magentaBright - 亮品红色文本
- cyanBright - 亮青色文本
- whiteBright - 亮白色文本

### 背景色

- bgBlack - 黑色背景
- bgRed - 红色背景
- bgGreen - 绿色背景
- bgYellow - 黄色背景
- bgBlue - 蓝色背景
- bgMagenta - 品红色背景
- bgCyan - 青色背景
- bgWhite - 白色背景
- bgGray - 灰色背景
- bgRedBright - 亮红色背景
- bgGreenBright - 亮绿色背景
- bgYellowBright - 亮黄色背景
- bgBlueBright - 亮蓝色背景
- bgMagentaBright - 亮品红色背景
- bgCyanBright - 亮青色背景
- bgWhiteBright - 亮白色背景

### 十六进制数字表示法 (Hex)

- hex - (三位) #fff, ...
- hex - (六位) #ffffff, ...
- hex - (无#号) fff, ffffff, ...

### 三原色光模式 (RGB)

- rgb - (255, 255, 255), ...

### CSS 关键字

在 [W3C Wiki][css-keywords-url] 查看完整列表。

- keyword - azure, gold, indigo, ...

## 💐 致谢

- [ansi-styles][ansi-styles-url] - 实现了 hexToRgb 函数。
- [chalk-pipe][chalk-pipe-url] - 整理 cssKeywords 数据。
- [yoctocolors][yoctocolors-url] - 实现了 format 函数。

## 🔗 关联库

- [palette-cli][palette-cli-url] - 一个 Node.js 库使你的终端输入变得丰富多彩。

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues][issues-url] 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE][license-url] 文件。


[node-image]: https://img.shields.io/node/v/%40kabeep%2Fpalette?color=lightseagreen "Node.js Version"
[node-url]: https://nodejs.org

[npm-image]: https://img.shields.io/npm/d18m/%40kabeep%2Fpalette?color=cornflowerblue "NPM Downloads"
[npm-url]: https://www.npmjs.com/package/@kabeep/palette

[codecov-image]: https://img.shields.io/codecov/c/github/kabeep/palette?logo=codecov&color=mediumvioletred "Test Coverage"
[codecov-url]: https://codecov.io/gh/kabeep/palette

[bundle-phobia-image]: https://img.shields.io/bundlephobia/minzip/@kabeep/palette "Bundle Size"
[bundle-phobia-url]: https://bundlephobia.com/package/@kabeep/palette

[circleci-image]: https://dl.circleci.com/status-badge/img/gh/kabeep/palette/tree/master.svg?style=shield "Build Status"
[circleci-url]: https://dl.circleci.com/status-badge/redirect/gh/kabeep/palette/tree/master

[hex-triplet-url]: https://en.wikipedia.org/wiki/Web_colors#Hex_triplet
[rgb-model-url]: https://en.wikipedia.org/wiki/RGB_color_model
[css-keywords-url]: https://www.w3.org/wiki/CSS/Properties/color/keywords

[ansi-styles-url]: https://github.com/chalk/chalk/blob/main/source/vendor/ansi-styles/index.js#L134
[chalk-pipe-url]: https://github.com/LitoMore/chalk-pipe/blob/main/source/styles.ts
[yoctocolors-url]: https://github.com/sindresorhus/yoctocolors/blob/main/base.js#L27
[chalk-faq-url]: https://github.com/chalk/chalk?tab=readme-ov-file#why-not-switch-to-a-smaller-coloring-package
[palette-cli-url]: https://github.com/kabeep/palette-cli

[license-image]: https://img.shields.io/github/license/kabeep/palette?color=slateblue "License"
[license-url]: LICENSE

[perf-zh-cn-url]: performance/PERFORMANCE.zh-CN.md
[en-us-url]: README.md

[docs-url]: https://kabeep.github.io/palette
[issues-url]: https://github.com/kabeep/palette/issues
