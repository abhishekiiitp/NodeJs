 console.log("hello world");

 var a=10;
 var b=20;
// this callback will only be pushed to call stack in v8 once the call stack is empty(after the GEC execution)
 setTimeout(()=>{
    console.log("call me right now");
 },0); // it will be called once the main thread call stack is empty


 setTimeout(()=>{
    console.log("call me after 3 seconds");
 },3000);

 function multiply(a,b){
    const result = a*b;
    return result;
 }

 var c= multiply(a,b);

 console.log("multiply result :",c);

//  output 
// hello world
// multiply result : 200
// call me right now
// call me after 3 seconds