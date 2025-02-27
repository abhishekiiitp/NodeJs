const fs = require("fs");

setImmediate(()=>{
    console.log("immediate called");
});

setTimeout(()=>{
    console.log("timer expired")
},0);

Promise.resolve().then(()=>{
    console.log("promise");
});

fs.readFile(".././file.txt","utf8",()=>{
    console.log("file reading CB");
});

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("inner next tick");
    });

    console.log("outer next tick");
});

console.log("last line");

/** my output
 * last line
 * outer next tick
 * inner next tick
 * promise
 * timer expired
 * immediate called
 * file reading CB
 */