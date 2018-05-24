'use strict';
let expect = require('chai').expect,
    assert = require('chai').assert;

// npm i nyc --save-dev / npm i nyc -g
// npm run build
// nyc npm test

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

var failConfig = {
  fail: true,
};

// getObjByKey

var data = {
  CURSOR_1_UP    : { id: 'up',    key: '1' },
  CURSOR_1_DOWN  : { id: 'down',  key: '2' },
  CURSOR_1_LEFT  : { id: 'left',  key: '3' },
  CURSOR_1_RIGHT : { id: 'right', key: '4' },
  TECH_2_BLOCK   : { id: 'block', key: 'b' }
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
          title: 'node3',
          children: [{
            title: 'randomValue3',
          }]
        }]
      }]
    }]
  }]
}];

var arrayTree = new Array('a', 'b', 'node3');

describe('Module', () => {
  var ObjectHelper = require('../dist/index.js').ObjectHelper;

  it('should exists', () => {
    expect(new ObjectHelper()).to.exist;
  });

  describe('mergeObjects function', () => {

    describe('response validation 1', () => {
      it('should throw "First parameter must not be null or empty"', () => {
        expect(() => ObjectHelper.mergeObjects(null, customConfig)).to.throw(Error, 'First parameter must not be null or empty');
      });
    })

    describe('response validation 2', () => {
      var result = ObjectHelper.mergeObjects(defaultConfig, failConfig);
      it('should return true', () => {
        expect(result.fail).to.equal(true);
      });
    })

    describe('response validation 3', () => {
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
    })

  });

  describe('filterObjectsByKey function', () => {

    describe('response validation 1', () => {
      var result = ObjectHelper.filterObjectsByKey(data, 'ok');
      it('should return null', () => {
        expect(result).to.equal(null);
      });
    })

    describe('response validation 2', () => {
      var result = ObjectHelper.filterObjectsByKey(data, 'CURSOR');
      it('should return Array', () => {
        expect(result.constructor).to.equal(Array);
      });
      it('should return "up"', () => {
        expect(result[0].id).to.equal('up');
      });
    })

    describe('response validation 3', () => {
      var result = ObjectHelper.filterObjectsByKey(data, 'CURSOR', ['UP', 'LEFT']);
      it('should return Array', () => {
        expect(result.constructor).to.equal(Array);
      });
      it('should return "down"', () => {
        expect(result[0].id).to.equal('down');
      });
    })

  });

  describe('searchTree function', () => {

    describe('response validation 1', () => {
      var result = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue3');
      it('should return Object', () => {
        expect(result.constructor).to.equal(Object);
      });
      it('should return "randomValue3"', () => {
        expect(result.title).to.equal('randomValue3');
      });
    })

    describe('response validation 2', () => {
      var result = ObjectHelper.searchTree(arrayTree, 'children', 'title', 'node3');
      it('should return null', () => {
        expect(result).to.equal(null);
      });
    })

  })

});