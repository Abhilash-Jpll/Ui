

let promise1 = new Promise((resolve, reject) => {
    resolve("promise_1")
})
let promise2 = new Promise((resolve, reject) => {
    resolve("promise_2")
})
let promise3 = new Promise((resolve, reject) => {
    resolve("promise_3")
})

async function myFun() {
    const res1 = await promise1;
    const res2 = await promise2;
    const res3 = await promise3;
    console.log(res1, res2, res3);
}

myFun();        //  promise_1 promise_2 promise_3







/*
    async-await ==> ES6

EX1:=
----

let promise = new Promise((resolve, reject)=>{
    resolve("async & await Example...!");
});

async function fun_one(){
    const result = await promise;
    console.log(result);
}

fun_one();          //  promise_1


*/