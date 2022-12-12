
// 1>   var->ES1     let->ES6
// 2>   var->allows dup vars     let->ES6->not allows dup vars
// var num = 100;
// console.log(num); 
// var num = 200;
// console.log(num); 

// let num1 = 300;
// console.log(num1); 
// let num2 = 400;
// console.log(num2); 
//      SyntaxError: Identifier 'num' has already been declared



// 3>                             Scope
// //  Global Variable 
// var data = 100; 

// {
//     //  Local Variable 
//     var data = 200;
// }
// console.log(data);      //200


// let data1 = 100; 

// {
//     //  Local Variable 
//     let data1 = 200;
// }
// console.log(data1);     //100




//  4>                                Variable Hoisting
// console.log(num91);         //  ReferenceError: num99 is not defined
// let num91=45;               //  ReferenceError: Cannot access 'num99' before initialization

// console.log(num92);             //  undefined <-- this is called Variable Hoisting
// var num92=445;              



// for Loop with setTimeout()
for(var i=1; i<=5; i++) {
   setTimeout(()=>{
    console.log(i);
   },1000);
}