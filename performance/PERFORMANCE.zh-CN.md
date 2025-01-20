<div align="center">

<h1>性能表现</h1>

</div>

## 🔌 基准测试

> 使用 Vitest v3.0.2

## 📌 指标

- **name** - 测试函数或代码块的包名称
- **hz** (Hertz) - 每秒执行的操作次数 (ops/sec)
- **min** (Minimum) - 单次操作的最短时间
- **max** (Maximum) - 单次操作的最长时间
- **mean** - 单次操作的平均时间
- **p75** (75th Percentile) - 75% 操作耗时低于此值
- **p99** (99th Percentile) - 99% 操作耗时低于此值
- **p995** (99.5th Percentile) - 99.5% 操作耗时低于此值
- **p999** (99.9th Percentile) - 99.9% 操作耗时低于此值
- **rme** (Relative Margin of Error) - 测试结果的相对误差
- **samples** - 基准测试样本数量

## ⚙️ API

### 修饰符

[performance/modules/modifier.perf.ts](./modules/modifier.perf.ts) > bold 12812ms

| name            |      hz       |  min   |   max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |    |
|-----------------|:-------------:|:------:|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:--:|
| @kabeep/palette | 15,585,323.77 | 0.0000 | 0.1739  | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.26% | 7792662  |    |
| ansi-colors     | 4,539,487.14  | 0.0001 | 10.6455 | 0.0002 | 0.0002 | 0.0005 | 0.0006 | 0.0017 | ±4.18% | 2269744  |    |
| chalk           | 8,027,206.45  | 0.0001 | 0.1104  | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0009 | ±0.25% | 4013604  |    |
| cli-color 🚨    | 1,581,363.97  | 0.0005 | 0.2672  | 0.0006 | 0.0006 | 0.0010 | 0.0012 | 0.0066 | ±0.38% |  790682  | 最慢 |
| colorette 🚀    | 27,905,590.87 | 0.0000 | 1.0105  | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.47% | 13952798 | 最快 |
| picocolors      | 8,011,957.83  | 0.0001 | 0.1603  | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0004 | ±0.24% | 4005979  |    |
| yoctocolors     | 5,527,785.92  | 0.0001 | 0.1312  | 0.0002 | 0.0002 | 0.0003 | 0.0003 | 0.0005 | ±0.22% | 2763893  |    |

```
基准统计
---
colorette - performance/modules/modifier.perf.ts > bold
1.79x faster than @kabeep/palette
3.48x faster than chalk
3.48x faster than picocolors
5.05x faster than yoctocolors
6.15x faster than ansi-colors
17.65x faster than cli-color
```

### 前景色

[performance/modules/foreground.perf.ts](./modules/foreground.perf.ts) > black 12528ms

| name            |      hz       |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |    |
|-----------------|:-------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:--:|
| @kabeep/palette | 13,841,311.27 | 0.0000 | 0.1621 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.27% | 6920657  |    |
| ansi-colors     | 4,283,194.32  | 0.0001 | 1.0147 | 0.0002 | 0.0002 | 0.0006 | 0.0006 | 0.0014 | ±1.11% | 2141598  |    |
| chalk           | 7,879,603.87  | 0.0001 | 0.1689 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.24% | 3939802  |    |
| cli-color 🚨    | 1,334,114.21  | 0.0005 | 0.3076 | 0.0007 | 0.0007 | 0.0022 | 0.0025 | 0.0140 | ±0.44% |  667058  | 最慢 |
| colorette 🚀    | 27,915,959.47 | 0.0000 | 0.1543 | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.23% | 13957980 | 最快 |
| picocolors      | 7,931,110.94  | 0.0001 | 0.1622 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.25% | 3965556  |    |
| yoctocolors     | 4,648,265.98  | 0.0001 | 0.1380 | 0.0002 | 0.0002 | 0.0004 | 0.0004 | 0.0021 | ±0.23% | 2324133  |    |

```
基准统计
---
colorette - performance/modules/foreground.perf.ts > black
2.02x faster than @kabeep/palette
3.52x faster than picocolors
3.54x faster than chalk
6.01x faster than yoctocolors
6.52x faster than ansi-colors
20.92x faster than cli-color
```

### 背景色

[performance/modules/background.perf.ts](./modules/background.perf.ts) > bgBlack 12593ms

| name            |      hz       |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |    |
|-----------------|:-------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:--:|
| @kabeep/palette | 14,297,291.69 | 0.0000 | 0.1677 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.23% | 7148647  |    |
| ansi-colors     | 4,430,181.18  | 0.0001 | 0.4436 | 0.0002 | 0.0002 | 0.0003 | 0.0004 | 0.0008 | ±1.00% | 2215091  |    |
| chalk           | 8,126,979.82  | 0.0001 | 0.3528 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.31% | 4063490  |    |
| cli-color 🚨    | 1,547,521.05  | 0.0005 | 0.4908 | 0.0006 | 0.0006 | 0.0009 | 0.0011 | 0.0046 | ±0.49% |  773761  | 最慢 |
| colorette 🚀    | 28,007,436.02 | 0.0000 | 0.1589 | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.23% | 14003719 | 最快 |
| picocolors      | 7,981,248.54  | 0.0001 | 0.1720 | 0.0001 | 0.0001 | 0.0002 | 0.0003 | 0.0004 | ±0.25% | 3990625  |    |
| yoctocolors     | 4,843,118.16  | 0.0001 | 0.1995 | 0.0002 | 0.0002 | 0.0003 | 0.0003 | 0.0006 | ±0.27% | 2421560  |    |

```
基准统计
---
colorette - performance/modules/background.perf.ts > bgBlack
1.96x faster than @kabeep/palette
3.45x faster than chalk
3.51x faster than picocolors
5.78x faster than yoctocolors
6.32x faster than ansi-colors
18.10x faster than cli-color
```

### 十六进制数字表示法 (Hex)

[performance/modules/hex.perf.ts](./modules/hex.perf.ts) > hex 3254ms

| name               |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |    |
|--------------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:--:|
| @kabeep/palette 🚀 | 4,198,727.58 | 0.0002 | 0.3274 | 0.0002 | 0.0003 | 0.0004 | 0.0005 | 0.0015 | ±0.36% | 2099365 | 最快 |
| chalk              | 2,880,621.96 | 0.0003 | 0.4397 | 0.0003 | 0.0003 | 0.0005 | 0.0006 | 0.0016 | ±0.76% | 1440311 | 最慢 |
| kuler              | 3,838,605.98 | 0.0002 | 0.3165 | 0.0003 | 0.0003 | 0.0004 | 0.0005 | 0.0014 | ±0.60% | 1919303 |    |

```
基准统计
---
@kabeep/palette - performance/modules/hex.perf.ts > hex
1.09x faster than kuler
1.46x faster than chalk
```

### 三原色光模式 (RGB)

[performance/modules/rgb.perf.ts](./modules/rgb.perf.ts) > rgb 2804ms

| name               |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |    |
|--------------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:--:|
| @kabeep/palette 🚀 | 7,783,413.47 | 0.0001 | 0.1966 | 0.0001 | 0.0001 | 0.0002 | 0.0003 | 0.0005 | ±0.71% | 3891707 | 最快 |
| chalk              | 4,608,259.14 | 0.0001 | 0.2312 | 0.0002 | 0.0002 | 0.0003 | 0.0005 | 0.0008 | ±0.29% | 2304130 |    |

```
基准统计
---
@kabeep/palette - performance/modules/rgb.perf.ts > hex
1.69x faster than chalk
```

### CSS 关键字

[performance/modules/keyword.perf.ts](./modules/keyword.perf.ts) > cyan 2368ms

| name            |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |    |
|-----------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:--:|
| @kabeep/palette | 3,223,369.89 | 0.0002 | 0.7981 | 0.0003 | 0.0003 | 0.0005 | 0.0006 | 0.0027 | ±2.34% | 1611685 |    |
| chalk-pipe 🚀   | 4,079,369.09 | 0.0001 | 0.1855 | 0.0002 | 0.0002 | 0.0009 | 0.0015 | 0.0027 | ±0.28% | 2039685 | 最快 |

```
基准统计
---
chalk-pipe - performance/modules/keyword.perf.ts > CSS Keyword
1.66x faster than @kabeep/palette
```
