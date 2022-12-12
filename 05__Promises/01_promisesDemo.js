
let promise3 = new Promise((abhi, hari)=>{
    setTimeout(()=>{
        abhi("promise3");
    }, 1000);
});
 
promise3.then((pevRes)=>{
    console.log(pevRes);
}, (errRes)=>{
    console.log(errRes);
});




/*
    Promises :=> 
    1> Communication b/w Producer and Consumer
    2>  Special Java Script Objects
    3>  Producer-> Promise(C) and Consumer-> then()
            ******> all(), all() &race()
    4> States :> Sucess->resolve, failure->reject & pandding

    EX1 :=
    -----

    // Producer
let promise1 = new Promise((resolve, reject)=>{
    resolve("Sucessafull Promise...!");
});

// Consumer
promise1.then((pevRes)=>{
    console.log(pevRes);        //  Sucessafull Promise
}, (errRes)=>{
    console.log(errRes);
});


let promise2 = new Promise((resolve, reject)=>{
    reject("Failure Promise...!");
});

promise2.then((pevRes)=>{
    console.log(pevRes);       
}, (errRes)=>{
    console.log(errRes);        //  Failure Promise...!
});


EX2 :=
-----

*/