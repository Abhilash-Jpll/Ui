
function *fun_one() {
    yield "abc";
    yield 123;
    yield "mno";
    yield 102030;
    yield "pqr";
    yield "xyz";
}

let cursor = fun_one();

console.log(cursor); 
console.log(cursor.next());
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next()); 

/*

// Genarics are used to control the execution flow of the program.

Object [Generator] {}
{ value: 'abc', done: false } 
{ value: 123, done: false }
{ value: 'mno', done: false }
{ value: 102030, done: false }
{ value: 'pqr', done: false }
{ value: 'xyz', done: false }
{ value: undefined, done: true }

/  How to Print with Loops


do{
    let lpVar = cursor.next();
    if(!lpVar.done) {
        console.log(lpVar);
        lpVar = cursor.next(); 
    }   
}while(!lpVar.done)

*/