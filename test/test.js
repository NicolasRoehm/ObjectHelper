'use strict';
var expect       = require('chai').expect;
var ObjectHelper = require('../dist/index.js').ObjectHelper;

// mergeObjects

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

// getObjByKey

var data = {
  CURSOR_1_UP    : { id: 'up',    key: '1' },
  CURSOR_1_DOWN  : { id: 'down',  key: '2' },
  CURSOR_1_LEFT  : { id: 'left',  key: '3' },
  CURSOR_1_RIGHT : { id: 'right', key: '4' },
  TECH_2_BLOCK   : { id: 'block', key: 'b' },
};

// searchTree
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

describe('mergeObjects function test', () => {
  var result = ObjectHelper.mergeObjects(defaultConfig, customConfig);
  it('should return Object', () => {
    expect(result.constructor).to.equal(Object);
  });
  it('should return false', () => {
    expect(result.flipped).to.equal(false);
  });
  it('should return true', () => {
    expect(result.isFixedToCamera).to.equal(true);
  });
  it('should return 0', () => {
    expect(result.healthBar.x).to.equal(0);
  });
  it('should return 10', () => {
    expect(result.healthBar.y).to.equal(10);
  });
});

describe('filterObjectsByKey function test', () => {
  var result = ObjectHelper.filterObjectsByKey(data, 'CURSOR', ['UP', 'LEFT']);
  it('should return Array', () => {
    expect(result.constructor).to.equal(Array);
  });
  it('should return "down"', () => {
    expect(result[0].id).to.equal('down');
  });
});

describe('searchTree function test', () => {
  var result = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue1');
  it('should return "randomValue1"', () => {
    expect(result.title).to.equal('randomValue1');
  });
});