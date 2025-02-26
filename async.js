const fs = require("fs");

const https = require("https");

console.log("hello world");

var a = 50;
var b= 16;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data succesfully");
});

setTimeout(()=>{
    console.log("set time out called after 5 seconds");
},5000);


// synchronous read file function
// => It will block the main thread as if it is taking time x next line will execute after that 
fs.readFileSync("./file.txt","utf8"); 

console.log("this will called only after file gets read");

// Async read file function
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("Async File data :", data);
});


function addition(a,b){
    const result = a+b;
    return result;
}

var c= addition(a,b);

console.log("addition result is :", c);