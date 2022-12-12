
// ES9

// (()=>{
//     console.log("Hello World")
// }) ();                               //  Hello World


// ((arg1, arg2) => {
//     console.log(arg1 +arg2);
// }) (10, 20);                        //  30

// let result = ((arg1, arg2)=>{
//     return arg1 +arg2;
// }) (100, 200);
// console.log(result);                //  300

// ((arg1, arg2) => {
//     console.log(arg1 +arg2);
// }) ('Abhilash', '  Jupalli');       //  Abhilash  Jupalli


/*
Additional pro, IIFE, In for loop with setTimeout(), var i=1 ==> 1 to 5
    
    Normal for loop :--
        let i=1 ==> 1 to 5
        var i=1 ==> 6(% times)

*/

for(var i=1; i<=5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000) 
}


for(var x=1; x<=5; x++){
    ((x)=>{
        setTimeout(()=>{
            console.log(x);
        },1000)
    })  (x);
}                                   //  1 to 5





