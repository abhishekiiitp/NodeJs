console.log("sum modules called");
var x = "chhhh";
function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}

module.exports = {x,calculateSum};