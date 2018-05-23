"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHelper = /** @class */ (function () {
    function ObjectHelper() {
    }
    /** Merge the first object with the second.
    *
    * @param {Object} targetObj The object to transform.
    * @param {Object} withObj The object that gives its properties to the `targetObj`.
    * @returns {Object} Returns a new object combined with supplied arguments (targetObj & withObj).
    * @example
    *
    * let config = ObjectHelper.mergeObjects(defaultConfig, customConfig);
    */
    ObjectHelper.mergeObjects = function (targetObj, withObj) {
        for (var w in withObj) {
            try {
                targetObj[w] = withObj[w].constructor === Object ? this.mergeObjects(targetObj[w], withObj[w]) : withObj[w];
            }
            catch (e) {
                targetObj[w] = withObj[w];
            }
        }
        return targetObj;
    };
    /** Get a list of objects filtered by a search key and a list of keys to ignore.
    *
    * @param {Object} object The object to filter.
    * @param {string} includeKey The key that the function looks for to filter the object.
    * @param {Array} excludeKeys An optional list of keys to exclude from the search filter.
    * @returns {Object|null} Returns a new object filtered by supplied arguments (includeKey & excludeKeys) or null if no matching key was found.
    * @example
    *
    * let simObj = ObjectHelper.filterObjectsByKey(data, 'cursor');
    *
    * let advObj = ObjectHelper.filterObjectsByKey(data, 'cursor', ['up', 'left']);
    */
    ObjectHelper.filterObjectsByKey = function (object, includeKey, excludeKeys) {
        if (!excludeKeys)
            excludeKeys = [' ']; // Cancel the exclude list if nothing is provided
        var newObject = [];
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.indexOf(includeKey) !== -1) // If the key contains our string
             {
                var ignore = false;
                for (var _b = 0, excludeKeys_1 = excludeKeys; _b < excludeKeys_1.length; _b++) {
                    var exclude = excludeKeys_1[_b];
                    if (key.indexOf(exclude) !== -1)
                        ignore = true;
                }
                if (!ignore)
                    newObject.push(object[key]);
            }
        }
        if (newObject.length)
            return newObject;
        else
            return null;
    };
    /** Find a node in a tree - Searches items tree for object with specified prop with value.
    *
    * @param {Array|Object} tree Nodes tree with children items in `nodesProp`, with one (object) or many (array of objects) roots.
    * @param {string} propNodes Name of prop that holds child nodes array.
    * @param {string} prop Name of searched node's prop.
    * @param {*} value Value of searched node's prop.
    * @returns {Object|null} Returns first object that match supplied arguments (prop & value) or null if no matching object was found.
    * @example
    *
    * let node = ObjectHelper.searchTree(tree, 'children', 'title', 'randomValue1');
    */
    ObjectHelper.searchTree = function (tree, nodesProp, prop, value) {
        var i, f = null; // Iterator, found node
        if (Array.isArray(tree)) { // If entry object is array objects, check each object
            for (i = 0; i < tree.length; i++) {
                f = this.searchTree(tree[i], nodesProp, prop, value);
                if (f) { // If found matching object, return it.
                    return f;
                }
            }
        }
        else if (typeof tree === 'object') { // Standard tree node (one root)
            if (tree[prop] !== undefined && tree[prop] === value) {
                return tree; // Found matching node
            }
        }
        if (tree[nodesProp] !== undefined && tree[nodesProp].length > 0) { // If this is not maching node, search nodes, children (if prop exist and it is not empty)
            return this.searchTree(tree[nodesProp], nodesProp, prop, value);
        }
        else {
            return null; // Node does not match and it neither have children
        }
    };
    return ObjectHelper;
}());
exports.ObjectHelper = ObjectHelper;
