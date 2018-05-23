# Object Helper
> JavaScript helper for objects management.

<a href="https://nodei.co/npm/object-helper-js/">
  <img src="https://nodei.co/npm/object-helper-js.svg?downloads=true&downloadRank=true&stars=true">
</a>

## Installation
```bash
$ npm install object-helper-js --save
```

## Import
### Javascript
```javascript
let ObjectHelper = require('object-helper').ObjectHelper;
```

### TypeScript
```typescript
import { ObjectHelper } from 'object-helper';
```

## Usage

### MergeObjects
```javascript
let defaultConfig = {
  flipped: false,
  isFixedToCamera: false
};

let customConfig = {
  isFixedToCamera: true
};

let config = ObjectHelper.mergeObjects(defaultConfig, customConfig);
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
          title: 'node2',
          children: [{
            title: 'randomValue3',
          }]
        }]
      }]
    }]
  }]
}];

let nodes = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue1');
```

### Test
```sh
npm run test
```