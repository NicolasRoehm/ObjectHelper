export declare class ObjectHelper {
    /** Merge the first object with the second.
    *
    * @param {Object} targetObj The object to transform.
    * @param {Object} withObj The object that gives its properties to the `targetObj`.
    * @returns {Object} Returns a new object combined with supplied arguments (targetObj & withObj).
    * @example
    *
    * let config = ObjectHelper.mergeObjects(defaultConfig, customConfig);
    */
    static mergeObjects(targetObj: any, withObj: any): void;
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
    static filterObjectsByKey(object: any, includeKey: string, excludeKeys?: string[]): any;
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
    static searchTree(tree: any, nodesProp: string, prop: string, value: any): any;
}
