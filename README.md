# object-helper
A Javascript helper for objects management.

## Installation
```sh
npm install object-helper --save
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
### TypeScript
```typescript
// mergeObjects

let defaultConfig : any = {
  flipped: false,
  isFixedToCamera: false
};

let customConfig : any = {
  isFixedToCamera: true
};

let config : any = ObjectHelper.mergeObjects(defaultConfig, customConfig);

// getObjByKey

let data : any = {
  CURSOR_1_UP    : { id: 'up',    key: '1' },
  CURSOR_1_DOWN  : { id: 'down',  key: '2' },
  CURSOR_1_LEFT  : { id: 'left',  key: '3' },
  CURSOR_1_RIGHT : { id: 'right', key: '4' },
  TECH_2_BLOCK   : { id: 'block', key: 'b' },
};

let objects : any = ObjectHelper.filterObjectsByKey(data, 'CURSOR', ['UP', 'LEFT']);

// searchTree

var tree : any = [{
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

let nodes : any = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue1');
```

### Test
```sh
npm run test
```