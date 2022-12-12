
/*
let fun_var = () => 2+3;
console.log(fun_var, fun_var());


let fun_var = (name, age, designation) => {
    // return `Hi, I'm ${name}, <==> ${age}YRs Old, <==> ${designation}`;
    return `${name} <==> ${age} <==> ${designation}`;
};
console.log(fun_var);
console.log(fun_var());
console.log(fun_var("Abhi", undefined, null));
console.log(fun_var("Abhi", 28));
console.log(fun_var("Abhi", 28, "Software Engineer"));



let fun_var = () => {
    return () => {
        return "Abhi...!";
    };
};
console.log(fun_var);
console.log(fun_var());            // [Function (anonymous)]
console.log(fun_var() ());

*/

let arr =[];

for(let i=0;i<=2;i++){
    arr.push(()=>{return "Abhi"});
}

arr.forEach((element, index)=>{
    console.log(element (), index);
});
