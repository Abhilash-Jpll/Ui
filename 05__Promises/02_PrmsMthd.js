let promise1 = new Promise((sucess, failure) => {
    setTimeout(() => {
        sucess("promise1");
    }, 2000);
});

let promise2 = new Promise((s, f) => {
    setTimeout(() => {
        f("promise2");
    }, 50000);
});

let promise3 = new Promise((abhi, hari) => {
    setTimeout(() => {
        abhi("promise3");
    }, 0);
});


// promise1.then((pevRes)=>{
//     console.log(pevRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// promise2.then((pevRes)=>{
//     console.log(pevRes);
// }, (errRes)=>{
//     console.log(errRes);
// });

// promise3.then((pevRes)=>{
//     console.log(pevRes);
// }, (errRes)=>{
//     console.log(errRes);
// });



// Promise.all([promise1, promise2, promise3]).then((pevRes)=>{
//     console.log(pevRes);
// },(errRes)=>{
//     console.log(errRes);
// });
// // [ 'promise1', 'promise2', 'promise3' ]
// //  promise2 :- if promise2 is a failed promise.

Promise.allSettled([promise1, promise2, promise3])
    .then((pevRes) => {
        console.log(pevRes);
    }, (errRes) => {
        console.log(errRes);
    });
// [
//     { status: 'fulfilled', value: 'promise1' },
//     { status: 'rejected', reason: 'promise2' },
//     { status: 'fulfilled', value: 'promise3' }      
//   ]


Promise.race([promise1, promise2, promise3])
    .then((pevRes) => {
        console.log(pevRes);
    }, (errRes) => {
        console.log(errRes);
    });
// promise3

/*
    Promise.all() :-
    -------------
     1> we should wait upto max execution time promise execution.
     2> any promise fail,we get only failed promise O/P.

     
*/








