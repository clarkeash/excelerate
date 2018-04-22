# Excelerate

<p align="center">
  <a href="https://travis-ci.org/clarkeash/excelerate">
    <img src="https://img.shields.io/travis/clarkeash/excelerate.svg?style=flat-square">
  </a>
  <a href="https://github.com/clarkeash/excelerate/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/clarkeash/excelerate.svg?style=flat-square">
  </a>
  <a href="https://twitter.com/clarkeash">
    <img src="http://img.shields.io/badge/author-@clarkeash-blue.svg?style=flat-square">
  </a>
</p>

## Installation

```bash
npm i excelerate
```

## Usage

```js{4}
import { Position } from 'excelerate';
```

### Single Cell
<excel :highlight="['a1']"></excel>

```js{4}
Position.of('a1').toObject();
// { start: { x: 1, y: 1 }, end: { x: 1, y: 1 } }
```

### Row Range
<excel :highlight="['a1', 'b1', 'c1']"></excel>

```js{4}
Position.of('a1:c1').toObject();
// { start: { x: 1, y: 1 }, end: { x: 3, y: 1 } }
```

### Column Range
<excel :highlight="['a1', 'a2', 'a3']"></excel>

```js{4}
Position.of('a1:a3').toObject();
// { start: { x: 1, y: 1 }, end: { x: 1, y: 3 } }
```

### Row & Column Range
<excel :highlight="['a1', 'a2', 'a3', 'b1', 'b2', 'b3']"></excel>

```js{4}
Position.of('a1:b3').toObject();
// { start: { x: 1, y: 1 }, end: { x: 2, y: 3 } }
```