<div align="center">

<h1>Palette</h1>

🎨 The fastest Node.js library to set terminal text colours & styles with hex, rgb and tree-shaking.

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![BundlePhobia][bundle-phobia-image]][bundle-phobia-url]
[![CircleCI][circleci-image]][circleci-url]

English | [简体中文][zh-cn-url]

</div>

## 📖 Introduction

> While chalk offers a user-friendly, chainable API, I don’t fully agree with
> its [defensive response with "a stubborn stance"][chalk-faq-url]. Here’s why:
> - Its large package size: chalk@4 is _101KB_ and chalk@5 is still _43.2KB_.
> - No _tree-shaking_ support.
> - Lacks _pipe/compose_ functional programming support.
> - In lightweight scenarios, _static ANSI strings_ are much more cost-effective.

This led me to develop the `@kabeep/palette` package in just two hours, which, like chalk, supports _ANSI 16 colors_,
_256 colors_, and _16m true-colors_.

Compared to other lightweight alternatives, it goes beyond basic ANSI keywords and also supports
_[Hex Triplet][hex-triplet-url]_, _[RGB Color Model][rgb-model-url]_, and _[CSS Keywords][css-keywords-url]_.

But this doesn’t mean it compromises on **size** or **performance**.
On the contrary, it performs excellently in [Benchmark Reports][perf-en-us-url]:

- Its `ESModule` file is just _9.48KB_, with `CommonJS` only _12.7KB_.
- In a wide range of benchmark samples, it outperforms `chalk` by more than _1.7x_ in speed.
- It’s significantly **faster than** other popular packages on npm, like colorette, which _only supports ANSI keywords_,
  and offers more API features.
- Fully supports `tree-shaking`, so CLI apps needing only basic styles like _yellow_ or _red_ can import it with no
  overhead.
- Enjoy functional programming with ease.

See [documentation][docs-url].

## 📦 Installation

```bash
npm install @kabeep/palette --save
```

```bash
yarn add @kabeep/palette
```

```bash
pnpm add @kabeep/palette
```

## ⚙️ Usage

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

## 🌈 Styles

### Modifiers

- reset - Reset the current style.
- bold - Make the text bold.
- dim - Make the text have lower opacity.
- italic - Make the text italic. (Not widely supported)
- underline - Put a horizontal line above the text. (Not widely supported)
- overline - Put a horizontal line below the text. (Not widely supported)
- inverse- Invert background and foreground colors.
- hidden - Print the text but make it invisible.
- strikethrough - Put a horizontal line through the center of the text. (Not widely supported)

### Foreground Colors

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray
- redBright
- greenBright
- yellowBright
- blueBright
- magentaBright
- cyanBright
- whiteBright

### Background Colors

- bgBlack
- bgRed
- bgGreen
- bgYellow
- bgBlue
- bgMagenta
- bgCyan
- bgWhite
- bgGray
- bgRedBright
- bgGreenBright
- bgYellowBright
- bgBlueBright
- bgMagentaBright
- bgCyanBright
- bgWhiteBright

### Hex Triplet

- hex - (three-digit) #fff, ...
- hex - (six-digit) #ffffff, ...
- hex - (without hashtag) fff, ffffff, ...

### RGB Color Model

- rgb - (255, 255, 255), ...

### CSS Color Keywords

See the full list at [W3C Wiki][css-keywords-url].

- keyword - azure, gold, indigo, ...

## 💐 Credits

- [ansi-styles][ansi-styles-url] - Implement hexToRgb function.
- [chalk-pipe][chalk-pipe-url] - Collating cssKeywords data.
- [yoctocolors][yoctocolors-url] - Implement format function & style description.

## 🔗 Related

- [forex-cli][forex-cli-url] - 💱 A Node.js Library to convert foreign exchange in terminal.

## 🤝 Contribution

Contributions via Pull Requests or [Issues][issues-url] are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE][license-url] file for details.


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

[license-image]: https://img.shields.io/github/license/kabeep/palette?color=slateblue "License"
[license-url]: LICENSE

[perf-en-us-url]: performance/PERFORMANCE.md
[perf-zh-cn-url]: performance/PERFORMANCE.zh-CN.md

[en-us-url]: README.md
[zh-cn-url]: README.zh-CN.md

[docs-url]: https://kabeep.github.io/palette
[issues-url]: https://github.com/kabeep/palette/issues
