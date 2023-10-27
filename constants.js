const TAGS = {
  ES2023: "ES2023",
  ES2022: "ES2022",
  ES5: "ES5",
  ES6: "ES6",
  immutable: "immutable",
  mutable: "mutable",
  ES10: "ES10",
  proposal: "proposal",
  experimental: "experimental",
  ES1: "ES1",
  initial: "initial",
}

const methods = [
  {
    key: "iterator",
    name: "Array[@@iterator]()",
    description: `@@iterator makes an array iterable.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator",
    tags: [TAGS.initial],
  },
  {
    key: "at",
    name: "Array.at(number)",
    description: `Works just like the [i] method, but can also take negetive integer as well,
    returning item from the end of array. Example: const arr = [22, 33, 44]; arr.at(0) === 22; arr.at(-1) === 44
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
    tags: [TAGS.ES2022],
  },
  {
    key: "concat",
    name: "Array.concat(...args)",
    description: `Used to merge n arrays. You can pass multiple set of arrays, or multiple set of values. 
    Note that it will return a new array so I think it's similar to [...arr1, arr2].
    Example: const arr3 = arr1.concat(arr2)
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
    tags: [TAGS.ES5],
  },
  {
    key: "copyWithin",
    name: "Array.copyWithin(number, number, number)",
    description: `Used to shallow copy an array within an array, meaning it's changing it.
    It takes 3 params - startIndex (from where to paste), start and end (from where to copy from), 
    tho are all optional.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",
    tags: [TAGS.ES6],
  },
  {
    key: "entries",
    name: "Array.entries()",
    description: `Works similar to Object.entries() but instead of keys returns an index.
    Example: [a, b, c].entries() -> [[0, a], [1, b], [2, c]]
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
    tags: [TAGS.ES6],
  },
  {
    key: "every",
    name: "Array.every(callbackFn)",
    description: `Checks if all of the values is true to some check. Example: [1, 2, 3].every((item) => item > 0)
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
    tags: [TAGS.ES6],
  },
  {
    key: "fill",
    name: "Array.fill(value: number, start: number, end: number)",
    description: `Fills an array with value from start index to end index. 
    If no range provided - it will fill from 0 to length - 1. Exmaple: [0, 0, 0, 0].fill(1, 1, 3) => [0, 1, 1, 1]
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
    tags: [TAGS.ES6, TAGS.mutable],
  },
  {
    key: "filter",
    name: "Array.filter(callbackFn)",
    description: `Filters an array by applying a callback function to each item, returning new array
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    tags: [TAGS.ES5, TAGS.immutable],
  },
  {
    key: "find",
    name: "Array.find(callbackFn)",
    description: `Finds a first item from array by using a callback function check, returning that value
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    tags: [TAGS.ES6],
  },
  {
    key: "findIndex",
    name: "Array.findIndex(callbackFn)",
    description: `Finds a first item from array by using a callback function check, returning an index of that value
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    tags: [TAGS.ES6],
  },
  {
    key: "findLast",
    name: "Array.findLast(callbackFn)",
    description: `Finds a first item from array (staring from last item) by using a callback function check, 
    returning that value
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast",
    tags: [TAGS.ES2023],
  },
  {
    key: "findLastIndex",
    name: "Array.findLastIndex(callbackFn)",
    description: `Finds a first item from array (staring from last item) by using a callback function check, 
    returning an index of that value
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex",
    tags: [TAGS.ES2023],
  },
  {
    key: "flatMap",
    name: "Array.flatMap(callbackFn)",
    description: `Basically a .map() + .flat() where you can return an array and it would flatten.
    Example: [1, 2].flatMap(n => [1, 1]) => [1, 1, 1, 1];
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap",
    tags: [TAGS.ES10],
  },
  {
    key: "from",
    name: "Array.from(arrayLike, mapFn?)",
    description: `Creates a new array + you can apply a map function to it.
    Example: Array.from("foo") => [f, o, o]
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",
    tags: [TAGS.ES6],
  },
  {
    key: "fromAsync",
    name: "Array.fromAsync(arrayLike, mapFn?)",
    description: `Same as .from() but used for async iterators (?)
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync",
    tags: [TAGS.proposal],
  },
  {
    key: "forEach",
    name: "Array.forEach(callbackFn)",
    description: `Calls a callback function on each item.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    tags: [TAGS.ES5],
  },
  {
    key: "group",
    name: "Array.group(callbackFn)",
    description: `Groups an array into an object by a value given in a callback function.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group",
    tags: [TAGS.experimental],
  },
  {
    key: "groupToMap",
    name: "Array.groupToMap(callbackFn)",
    description: `Groups an array into a Map object by a value given in a callback function.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap",
    tags: [TAGS.experimental],
  },
  {
    key: "includes",
    name: "Array.includes(searchElement: any): boolean",
    description: `Check if the searchElement is present in a given array, returning a boolean value.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    tags: [TAGS.ES6],
  },
  {
    key: "indexOf",
    name: "Array.indexOf(searchElement: any): number",
    description: `Check for the first searchElement in a given array, returning an index (-1 if not found).
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    tags: [TAGS.ES5],
  },
  {
    key: "isArray",
    name: "Array.isArray(value: any): boolean",
    description: `Checks if value is an Array. Example: Array.isArray("foo").
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
    tags: [TAGS.ES1],
  },
  {
    key: "join",
    name: "Array.join(separator: string): string",
    description: `Joins an array by a separator ("," if separator is not defined).
    Example: [1, 2, 3].join("-") => "1-2-3"
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    tags: [TAGS.ES5],
  },
  {
    key: "keys",
    name: "Array.keys()",
    description: `Works similar to Object.keys() but instead of keys returns an index.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys",
    tags: [TAGS.ES5],
  },
  {
    key: "lastIndexOf",
    name: "Array.lastIndexOf(searchElement: any): number",
    description: `Same as .indexOf() but searches backwards.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
    tags: [TAGS.ES5],
  },
  {
    key: "map",
    name: "Array.map(callbackFn): Array",
    description: `Creates a new array based with values got from callback function.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    tags: [TAGS.ES5, TAGS.immutable],
  },
  {
    key: "of",
    name: "Array.of(element0, element1, /* … ,*/ elementN): Array",
    description: `Creates an array from given elements. Example: Array.of(1, 2, 3) => [1, 2, 3].
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of",
    tags: [TAGS.ES6],
  },
  {
    key: "pop",
    name: "Array.pop(): value | undefined",
    description: `Removes the last item of an array. 
    It IS changing it, returning a removed value (undefined in array is empty).
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    tags: [TAGS.initial, ],
  },
  {
    key: "push",
    name: "Array.push(element0, element1, /* … ,*/ elementN): number",
    description: `Adds an element(s) to an end of array, returning a new length of array.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    tags: [TAGS.initial, TAGS.mutable],
  },
  {
    key: "reduce",
    name: "Array.reduce(callbackFn, initialValue?): any",
    description: `Executes a callbackFn to every item in array, returning new value.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    tags: [TAGS.ES5, TAGS.immutable],
  },
  {
    key: "reduceRight",
    name: "Array.reduce(callbackFn, initialValue?): any",
    description: `Executes a callbackFn to every item in array starting from last, returning new value.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
    tags: [TAGS.ES5, TAGS.immutable],
  },
  {
    key: "reverse",
    name: "Array.reverse(): array",
    description: `reversing an array in place (changing the original array), returning reversed array.
    Also check .toReversed()
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    tags: [TAGS.initial, TAGS.mutable],
  },
  {
    key: "shift",
    name: "Array.shift(): removedElement | undefined",
    description: `Removes the first element of an array, returning this element or undefined if array is empty.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    tags: [TAGS.initial, TAGS.mutable],
  },
  {
    key: "slice",
    name: "Array.slice(start?, end?): array",
    description: `Creates a shallow copy of an array from [start] to [end].
    Example: [1, 2, 3].slice(1) => [2, 3]
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    tags: [TAGS.initial, TAGS.immutable],
  },
  {
    key: "some",
    name: "Array.some(callbackFn): boolean",
    description: `Checks if at least one element fulfills a check from a callbackFn.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    tags: [TAGS.ES5, TAGS.immutable],
  },
  {
    key: "sort",
    name: "Array.sort(compareFn?): array",
    description: `Sorts an array in place, returning a sorted array.
    Also check .toSorted()
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    tags: [TAGS.ES5, TAGS.mutable],
  },
  {
    key: "splice",
    name: "Array.splice(start, deleteCount, item0, item1, /* … ,*/ itemN): array",
    description: `Replaces/adds/removes item in the array, returning an array of removed elements.
    Please check the referense below.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    tags: [TAGS.initial, TAGS.mutable],
  },
  {
    key: "toLocaleString",
    name: "Array.toLocaleString(locales, options): string",
    description: `In some way somolar to .toString(), but applies a locale fn to each element.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString",
    tags: [TAGS.initial],
  },
  {
    key: "toReversed",
    name: "Array.toReversed(): array",
    description: `Same as reverse() but immutable.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed",
    tags: [TAGS.ES2023, TAGS.immutable],
  },
  {
    key: "toSorted",
    name: "Array.toSorted(): array",
    description: `Same as .sort() but immutable.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted",
    tags: [TAGS.ES2023, TAGS.immutable],
  },
  {
    key: "toSpliced",
    name: "Array.toSpliced(): array",
    description: `Same as .splice() but immutable.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced",
    tags: [TAGS.ES2023, TAGS.immutable],
  },
  {
    key: "toString",
    name: "Array.toString(): string",
    description: `Converts an array to string of elements separated by comma.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
    tags: [TAGS.initial],
  },
  {
    key: "unshift",
    name: "Array.unshift(element0, element1, /* … ,*/ elementN): number",
    description: `Adds new elements to the beginning of an array, returning a chenged array's length.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    tags: [TAGS.initial],
  },
  {
    key: "values",
    name: "Array.values()",
    description: `Works similar to Object.entries() returning an iterator with array values.
    `,
    moreInfo: `Array.prototype.values() is the default implementation of Array.prototype[@@iterator]().
    Array.prototype.values === Array.prototype[Symbol.iterator];
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values",
    tags: [TAGS.ES6],
  },
  {
    key: "with",
    name: "Array.with(index, value): array",
    description: `Cahnges a single value at a given index, returning new array.
    `,
    moreInfo: `By this methid you can change only one element and then apply some others array methods.
    Please see the reference.
    `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with",
    tags: [TAGS.ES2023, TAGS.immutable],
  },
];