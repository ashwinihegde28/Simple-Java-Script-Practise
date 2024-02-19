const _ = require("lodash");

const original = { a: 1, b: { c: 3 } };
const deepClone = _.cloneDeep(original);

const shallowCloneObj = Object.assign({}, original);

shallowCloneObj.b.c = 3;
console.log("original : ", original);
console.log("shallowCloneObj : ", shallowCloneObj);

deepClone.b.c = 9;
console.log("deepClone : ", deepClone);
console.log("original : ", original);
