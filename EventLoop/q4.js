const fs = require("fs");

setImmediate(()=>{
    console.log("immediate called");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

Promise.resolve().then(()=>{
    console.log("promise called");
});

fs.readFile(".././file.txt","utf8",()=>{
    setTimeout(()=>{
        console.log("2nd timer called");
    },0);

    process.nextTick(()=>{
        console.log("2nd next tick");
    });

    setImmediate(()=>{
        console.log("2nd immediate call");
    });

    console.log("file reading CB");
});

process.nextTick(()=>{
    console.log("next tick");
})

console.log("last line");

// my output : (verdict- wrong)

// last line
// next tick
// promise called
// timer expired
// immediate called
// file reading CB
// 2nd next tick
// 2nd timer call
// 2nd immediate call

// Expected output :

// last line
// next tick
// promise called
// timer expired
// immediate called
// file reading CB
// 2nd next tick
// 2nd immediate call
// 2nd timer called
