
/*
// Fun Definition 
    //Zero Arguments Function
function myName()   // Fun Header 
{                                                                                                                                                                      
    return "Abhilash";  //  Fun Body
}


//  Fun Calling
myName();
console.log(myName());
console.log(myName);    //[Function: myName]

data1 = myName();
console.log(data1);

let data2 = myName();
console.log(data2);




//N Arguments Function
function fun_one(arg1, arg2, arg3) {
    // return arg1 + '<==>' +arg2+ '<==>' +arg3;
    return `${arg1} <==> ${arg2} <==> ${arg3}`;
}

console.log(fun_one);
console.log( fun_one() );
console.log( fun_one(10, 20, 30) );
console.log( fun_one(10, 20, 30, 40) );         //  10 <==> 20 <==> 30

console.log( fun_one("HTML", "CSS", "JavaScript") );



function fun_one() {
    return fun_two;
}

function fun_two() {
    return "Abhilash...!";
}
console.log( fun_one()() );         //  Abhilash...!

// console.log( fun_one );
// console.log( fun_one() );
// console.log( fun_two );
// console.log( fun_two() );

*/

let arr =[];

function fun_one() {
    return "Abhilash...!"
}

for(let i=0; i<=3; i++) {
    arr.push(fun_one);
}

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[0]());
// console.log(arr[0](), arr[1](), arr[2](), arr[3]());

arr.forEach((element, index)=>{
    console.log(element(), index);
});

