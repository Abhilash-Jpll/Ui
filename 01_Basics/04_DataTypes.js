
//Number
let data = 10;
console.log(data, typeof (data));

//Number Types
let decimalNo = 24;
console.log(decimalNo);
let doubleNo = 564.12;
console.log(doubleNo, typeof (doubleNo));
let hexaDecimalNo = 0x4515;
// console.log(hexaDecimalNo, typeof (hexaDecimalNo));
console.log(hexaDecimalNo);
let octalNo = 0o34;
console.log(octalNo);
// let binaryNo =0b1245;
let binaryNo = 0b1011;
console.log(binaryNo, typeof (binaryNo));



//String
let firstName = 'Abhilash';
let lastName = "Jupalli";
let designation = `software Engineer`;
console.log(firstName, typeof (firstName));

console.log("Hi Every One, I'm " + firstName + " " + lastName + ", working as a " + designation + ".");
console.log('Hi Every One, I\'m ' + firstName + ' ' + lastName + ', working as a ' + designation + '.');
console.log(`Hi Every One, I'm ${firstName} ${lastName}, working as a ${designation}.`);

// SQL Query Printing
let tab_name = "emp";
let user_name = "abhi";
let password = "******";
console.log(`select * from ${tab_name} where uname=${user_name} and pwd=${password}`);


// Object
// boolean
let bool1 =1;
// console.log(bool1, typeof(bool1));
// let bool2 =0;
// console.log(bool2, typeof(bool2));

let bool3 =Boolean(20);
console.log(bool3, typeof(bool3));
let bool4 =Boolean(-20);
console.log(bool4, typeof(bool4));
let bool5 =Boolean(1);
console.log(bool5, typeof(bool5));
let bool6 =Boolean(0);
console.log(bool6, typeof(bool6));

// bigint
// null
// undefined
// NaN
// Symbol --> Given Security to data
let frameWork = Symbol("ReactJs");
console.log(frameWork);    // Symbol(ReactJs)


/*

// Primitive and NonPrimitive(Object Type)
// JavaScript String is not an Object Type

// String -> '' / "" / ``(Backtick Operator)
      - Backtick Operator --> ES6, privents concatination of o/ps and String info.
*/
