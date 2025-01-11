let str1 = "information";
console.log(`str1 length is ${str1.length}`);
console.log(`str1 result of uppercase method  is ${str1.toUpperCase()}`);
console.log(`str1 result of lowercase method  is ${str1.toLowerCase()}`);
console.log(`str1 result of charAt method  is ${str1.charAt(3)}`);
console.log(`str1 result of includes character is : ${str1.includes("tion")}`)
console.log(`str1 result of slice method is ${str1.slice(-6,7)}`); // slice methods takes neqtive number 
console.log(`str1 result of substring method is ${str1.substring(2,7)}`);

let str2 = " info    "
 console.log(`length of str2 is : ${str2.length}`);
 console.log(`result after using trim method ${str2.trim().length}`)
 console.log(`result of replace method is ${str1.replace("information","infonext")}`)
 console.log(`result of conacat method is ${str1.concat(str2)} `)

