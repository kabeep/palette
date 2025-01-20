<div align="center">

<h1>Performance</h1>

</div>

## 🔌 Benchmarking

> Powered by Vitest v3.0.2

## 📌 Indicator

- **name** - The package name of the benchmarked function or code block
- **hz** (Hertz) - Operations per second (ops/sec)
- **min** (Minimum) - The shortest time for a single operation
- **max** (Maximum) - The longest time for a single operation
- **mean** - The average time for a single operation
- **p75** (75th Percentile) - Time below which 75% of operations are completed
- **p99** (99th Percentile) - Time below which 99% of operations are completed
- **p995** (99.5th Percentile) - Time below which 99.5% of operations are completed
- **p999** (99.9th Percentile) - Time below which 99.9% of operations are completed
- **rme** (Relative Margin of Error) - The relative margin of error in the test results
- **samples** - The number of samples used for the benchmark

## ⚙️ API

### Background

[performance/modules/background.perf.ts](./modules/background.perf.ts) > bgBlack 12593ms

| name         |      hz       |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |         |
|--------------|:-------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:-------:|
| palette      | 14,297,291.69 | 0.0000 | 0.1677 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.23% | 7148647  |         |
| ansi-colors  | 4,430,181.18  | 0.0001 | 0.4436 | 0.0002 | 0.0002 | 0.0003 | 0.0004 | 0.0008 | ±1.00% | 2215091  |         |
| chalk        | 8,126,979.82  | 0.0001 | 0.3528 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.31% | 4063490  |         |
| cli-color 🚨 | 1,547,521.05  | 0.0005 | 0.4908 | 0.0006 | 0.0006 | 0.0009 | 0.0011 | 0.0046 | ±0.49% |  773761  | slowest |
| colorette 🚀 | 28,007,436.02 | 0.0000 | 0.1589 | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.23% | 14003719 | fastest |
| picocolors   | 7,981,248.54  | 0.0001 | 0.1720 | 0.0001 | 0.0001 | 0.0002 | 0.0003 | 0.0004 | ±0.25% | 3990625  |         |
| yoctocolors  | 4,843,118.16  | 0.0001 | 0.1995 | 0.0002 | 0.0002 | 0.0003 | 0.0003 | 0.0006 | ±0.27% | 2421560  |         |

```
Bench Summary
---
colorette - performance/modules/background.perf.ts > bgBlack
1.96x faster than palette
3.45x faster than chalk
3.51x faster than picocolors
5.78x faster than yoctocolors
6.32x faster than ansi-colors
18.10x faster than cli-color
```

### Foreground

[performance/modules/foreground.perf.ts](./modules/foreground.perf.ts) > black 12528ms

| name         |      hz       |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |         |
|--------------|:-------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:-------:|
| palette      | 13,841,311.27 | 0.0000 | 0.1621 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.27% | 6920657  |         |
| ansi-colors  | 4,283,194.32  | 0.0001 | 1.0147 | 0.0002 | 0.0002 | 0.0006 | 0.0006 | 0.0014 | ±1.11% | 2141598  |         |
| chalk        | 7,879,603.87  | 0.0001 | 0.1689 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.24% | 3939802  |         |
| cli-color 🚨 | 1,334,114.21  | 0.0005 | 0.3076 | 0.0007 | 0.0007 | 0.0022 | 0.0025 | 0.0140 | ±0.44% |  667058  | slowest |
| colorette 🚀 | 27,915,959.47 | 0.0000 | 0.1543 | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.23% | 13957980 | fastest |
| picocolors   | 7,931,110.94  | 0.0001 | 0.1622 | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0005 | ±0.25% | 3965556  |         |
| yoctocolors  | 4,648,265.98  | 0.0001 | 0.1380 | 0.0002 | 0.0002 | 0.0004 | 0.0004 | 0.0021 | ±0.23% | 2324133  |         |

```
Bench Summary
---
colorette - performance/modules/foreground.perf.ts > black
2.02x faster than palette
3.52x faster than picocolors
3.54x faster than chalk
6.01x faster than yoctocolors
6.52x faster than ansi-colors
20.92x faster than cli-color
```

### Modifier

[performance/modules/modifier.perf.ts](./modules/modifier.perf.ts) > bold 12812ms

| name         |      hz       |  min   |   max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples  |         |
|--------------|:-------------:|:------:|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:--------:|:-------:|
| palette      | 15,585,323.77 | 0.0000 | 0.1739  | 0.0001 | 0.0001 | 0.0001 | 0.0001 | 0.0002 | ±0.26% | 7792662  |         |
| ansi-colors  | 4,539,487.14  | 0.0001 | 10.6455 | 0.0002 | 0.0002 | 0.0005 | 0.0006 | 0.0017 | ±4.18% | 2269744  |         |
| chalk        | 8,027,206.45  | 0.0001 | 0.1104  | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0009 | ±0.25% | 4013604  |         |
| cli-color 🚨 | 1,581,363.97  | 0.0005 | 0.2672  | 0.0006 | 0.0006 | 0.0010 | 0.0012 | 0.0066 | ±0.38% |  790682  | slowest |
| colorette 🚀 | 27,905,590.87 | 0.0000 | 1.0105  | 0.0000 | 0.0001 | 0.0001 | 0.0001 | 0.0001 | ±0.47% | 13952798 | fastest |
| picocolors   | 8,011,957.83  | 0.0001 | 0.1603  | 0.0001 | 0.0001 | 0.0002 | 0.0002 | 0.0004 | ±0.24% | 4005979  |         |
| yoctocolors  | 5,527,785.92  | 0.0001 | 0.1312  | 0.0002 | 0.0002 | 0.0003 | 0.0003 | 0.0005 | ±0.22% | 2763893  |         |

```
Bench Summary
---
colorette - performance/modules/modifier.perf.ts > bold
1.79x faster than palette
3.48x faster than chalk
3.48x faster than picocolors
5.05x faster than yoctocolors
6.15x faster than ansi-colors
17.65x faster than cli-color
```

### Hex

[performance/modules/hex.perf.ts](./modules/hex.perf.ts) > hex 3254ms

| name       |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |         |
|------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:-------:|
| palette 🚀 | 4,198,727.58 | 0.0002 | 0.3274 | 0.0002 | 0.0003 | 0.0004 | 0.0005 | 0.0015 | ±0.36% | 2099365 | fastest |
| chalk      | 2,880,621.96 | 0.0003 | 0.4397 | 0.0003 | 0.0003 | 0.0005 | 0.0006 | 0.0016 | ±0.76% | 1440311 | slowest |
| kuler      | 3,838,605.98 | 0.0002 | 0.3165 | 0.0003 | 0.0003 | 0.0004 | 0.0005 | 0.0014 | ±0.60% | 1919303 |         |

```
Bench Summary
---
palette - performance/modules/hex.perf.ts > hex
1.09x faster than kuler
1.46x faster than chalk
```

### RGB

[performance/modules/rgb.perf.ts](./modules/rgb.perf.ts) > rgb 2804ms

| name       |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |         |
|------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:-------:|
| palette 🚀 | 7,783,413.47 | 0.0001 | 0.1966 | 0.0001 | 0.0001 | 0.0002 | 0.0003 | 0.0005 | ±0.71% | 3891707 | fastest |
| chalk      | 4,608,259.14 | 0.0001 | 0.2312 | 0.0002 | 0.0002 | 0.0003 | 0.0005 | 0.0008 | ±0.29% | 2304130 |         |

```
Bench Summary
---
palette - performance/modules/rgb.perf.ts > hex
1.69x faster than chalk
```

### CSS Keywords

[performance/modules/keyword.perf.ts](./modules/keyword.perf.ts) > cyan 2368ms

| name          |      hz      |  min   |  max   |  mean  |  p75   |  p99   |  p995  |  p999  |  rme   | samples |         |
|---------------|:------------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|:-------:|
| palette       | 3,223,369.89 | 0.0002 | 0.7981 | 0.0003 | 0.0003 | 0.0005 | 0.0006 | 0.0027 | ±2.34% | 1611685 |         |
| chalk-pipe 🚀 | 4,079,369.09 | 0.0001 | 0.1855 | 0.0002 | 0.0002 | 0.0009 | 0.0015 | 0.0027 | ±0.28% | 2039685 | fastest |

```
Bench Summary
---
chalk-pipe - performance/modules/keyword.perf.ts > CSS Keyword
1.66x faster than palette
```
