require('./abc');
const obj = require('./sum');

var name="abhishek";
var a=20;
var b=30;
// console.log(name);
// console.log("sum ",a+b);
// console.log(global);
// console.log(this); empty object
// console.log(globalThis);

obj.calculateSum(a,b);
console.log(globalThis === global);
console.log(obj.x);