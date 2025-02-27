const fs = require("fs");


console.log("script start");

const a=100;

setImmediate(()=>{
    console.log("set immediate is called");
});

fs.readFile("../file.txt","utf8",()=>{
    console.log("File read CB");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

function printA(){
    console.log("a =",a);
}

printA();

console.log("script end");

// My Output : 

// script start
// a=100
// script end
// timer expired
// set immediate is called
// File read CB


// Expected output :

// script start
// a = 100
// script end
// timer expired
// set immediate is called
// File read CB
