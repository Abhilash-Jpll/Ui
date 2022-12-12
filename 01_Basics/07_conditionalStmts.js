
// let flag = Boolean(-12);
// if (flag == 1)
//     console.log("Abhilash");


// let flag = Boolean(-12);
// if (flag == 0)
//     console.log("True Stamt");
// else
//     console.log("false Stamt");


// let a=10;
// let b=1000;
// let c=100;
// if(a>b && a>c)
//     console.log("a is bigger");
// else if(b>c)
//     console.log("b is bigger");
// else
//     console.log("c is bigger");


// let num=1234;
// let rev_num = 0;
// while(num!=0){
//     rev_num =(rev_num*10)+num%10;
//     console.log(rev_num)
//     num = num /10;
//     console.log(num);
// }
// console.log(rev_num);


// let num1=1;
// do{
//     console.log("Stmt need to Print before Condition");
//     num1++;
// }while(num1<=3)


let arr = [50, 20, 60, 30];
// for(let i=0; i<=arr.length-1; i++){
//     console.log(arr[i]);
// }    

// arr.forEach(element => {
//     console.log(element);
// });

// arr.forEach((element, index) => {
//     console.log(element, index, arr[index]);
// });

arr.forEach((element, index, arr) => {
    console.log(element, index, arr);// [50, 20, 60, 30] <== 4Times
});



// for(i in arr){
//     console.log(arr[i]);
// }


/*
//  if, if-else, if-elseif 
//  break
//  while, do-while, for, forEach

let flag =  true or 1 or Boolean(-12 or 12); 
let flag =  false or 0 or Boolean(0); 
*/