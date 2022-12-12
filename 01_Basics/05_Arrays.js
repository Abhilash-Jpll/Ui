
let arr = [10,20,30,40];
arr[2] = 1000;
// console.log(arr[2]);

/*

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// console.log(arr[0], arr[1], arr[2], arr[3]);

// ES6, Flat Arrow Functions
arr.forEach((element, index)=>{
    // console.log(element);
    // console.log(index);
    // console.log(element, index);
     console.log(arr[index]);
});


for(i in arr) {
    console.log(arr[i])
}


*/


for(let i=1; i<=5; i++) {
     arr.push(i);
    // arr.pop(i);
}


for(i in arr) {
    console.log(arr[i])
}


/*
arr.push(fun_one);
console.log(arr[0](), arr[1](), arr[2](), arr[3]());
// ()=>{}
*/

