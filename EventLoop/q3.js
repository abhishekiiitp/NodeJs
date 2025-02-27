const fs = require("fs");

console.log("script start");

const a=100;

setImmediate(()=>{
    console.log("set immediate is called");
});

Promise.resolve().then(() => console.log("promise"));

fs.readFile("../file.txt","utf8",()=>{
    console.log("File read CB");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

process.nextTick(()=>{
    console.log("process next tick");
})

function printA(){
    console.log("a =",a);
}

printA();

console.log("script end");

// My Output : 
// script start
// a=100
// script end
// process next tick
// promise
// timer expired
// set immediate is called
// File read CB


// Expected output :

// script start
// a = 100
// script end
// process next tick
// promise
// timer expired
// set immediate is called
// File read CB