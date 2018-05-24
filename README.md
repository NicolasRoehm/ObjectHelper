[![Build Status](https://travis-ci.org/Bakudan/ObjectHelper.svg?branch=master)](https://travis-ci.org/Bakudan/ObjectHelper)
[![Coverage Status](https://coveralls.io/repos/github/Caliatys/ObjectHelper/badge.svg?branch=master)](https://coveralls.io/github/Caliatys/ObjectHelper?branch=master)

# Object Helper
> JavaScript helper for object management.

<a href="https://runkit.com/bakudan/object-helper-js/" target="_blank">Demo with RunKit</a>

## Installation
```sh
npm install @caliatys/object-helper --save
```

<a href="https://nodei.co/npm/@caliatys/object-helper/" target="_blank">
  <img src="https://nodei.co/npm/@caliatys/object-helper.svg?downloads=true&downloadRank=true&stars=true">
</a>

## Import
### JavaScript
```javascript
let ObjectHelper = require('@caliatys/object-helper').ObjectHelper;
```

### TypeScript
```typescript
import { ObjectHelper } from '@caliatys/object-helper';
```

## Usage

### MergeObjects
```javascript
var defaultConfig = {
  flipped: false,
  isFixedToCamera: false,
  healthBar: {
    x: 0,
    y: 0
  }
};

var customConfig = {
  isFixedToCamera: true,
  healthBar: {
    y: 10
  }
};

let config = ObjectHelper.mergeObjects(defaultConfig, customConfig);

// {
//   flipped: false,
//   healthBar: { x: 0, y: 10 },
//   isFixedToCamera: true
// }
```

### FilterObjectsByKey
```javascript
let data = {
  CURSOR_1_UP    : { id: 'up',    key: '1' },
  CURSOR_1_DOWN  : { id: 'down',  key: '2' },
  CURSOR_1_LEFT  : { id: 'left',  key: '3' },
  CURSOR_1_RIGHT : { id: 'right', key: '4' },
  TECH_2_BLOCK   : { id: 'block', key: 'b' },
};

let objects = ObjectHelper.filterObjectsByKey(data, 'CURSOR', ['UP', 'LEFT']);

// [
//   { id: "down",  key: "2" },
//   { id: "right", key: "4" }
// ]
```

### SearchTree
```javascript
var tree = [{
  title: 'topNode',
  children: [{
    title: 'node1',
    children: [{
      title: 'randomValue1'
    }, {
      title: 'node2',
      children: [{
        title: 'randomValue2',
        children: [{
          title: 'node3',
          children: [{
            title: 'randomValue3'
          }]
        }]
      }]
    }]
  }]
}];

let nodes = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue2');

// {
//   title: "randomValue2",
//   children: [{
//     title: "node3",
//     children: [{
//        title: 'randomValue3'
//      }]
//   }]
// }
```

## Test
```sh
npm run test
```