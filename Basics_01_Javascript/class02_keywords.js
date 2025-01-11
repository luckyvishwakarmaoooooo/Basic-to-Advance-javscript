// in javascript there are three types of keywords let const and var 
// var is a function level scope we can access anywhere entire scope 
// let and const are  block level scope we can access only a specific boundriea
//  in var we can reassign and redeclear of the value
// in let keyword we can reassign the value but we can not redeclear the value 
// in const we can not redclear and reassign the value 

// var example given below;

function example() {
    
        let x = 200;
        var y = 1200;
        const z = 2300;
        
        console.table([x , y])

        // console.log(x);
console.log(y)
}
example();

console.log("hello")

let sname = "jhon";
var lname = "crystopher"
var lname = "jaguar"
 sname ="due"
console.table([sname , lname ]);