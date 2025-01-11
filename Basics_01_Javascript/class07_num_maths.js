let num = 123;
let newNum = new Number(100);
console.log(typeof(num));
console.log(typeof(newNum));

console.log(newNum.toFixed(2)) // toFixed use for how many values are come after the decimal 

let otherNumber = 23983.789
console.log(otherNumber.toPrecision(4))  //toPrecision use for one specific vlaue afte the decimal

let cost = 1000000;
console.log(cost.toLocaleString('en-IN'));



// ============================================================================================
//      DATE FUNCTION IMPPLEMENTATION 
// ============================================================================================

let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())


