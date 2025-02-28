const fs = require("fs");

const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 10;
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key-1 is generated");
});

// fs.readFile("./file.txt","utf8",()=>{
//     console.log("file reading");
// });

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key-2 is generated");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key-3 is generated");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key-4 is generated");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key-5 is generated");
});