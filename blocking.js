const crypto = require("crypto"); // nodejs core modules

console.log("hello world");

var a = 35;
var b =79;

//pbkdf2 : password based key derivative function
// Synchronous function - will block the main thread - dont use it 
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");

console.log("first key is generated");

// Async function 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key is generated :");
});

function addition(a,b){
    const result = a+b;
    return result;
}

var c= addition(a,b);

console.log("addition result is :",c);