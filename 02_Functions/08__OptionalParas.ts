

function fun_one(arg1?:string,arg2?:number,arg3?:string) :void{
    console.log(`${arg1} <==> ${arg2} <==> ${arg3}`);
}

fun_one(); 
fun_one("Abhi");
fun_one("Abhi", null, undefined);
fun_one(null, null, null);
fun_one(undefined, undefined, undefined);

/*

// fun_one();           //An argument for 'arg1' was not provided. <--OptionalParas
// fun_one(null, null, null);
        //  Argument of type 'null' is not assignable to parameter of type 'string | undefined'

// undefined <==> undefined <==> undefined
// Abhi <==> undefined <==> undefined     
// Abhi <==> null <==> undefined
// null <==> null <==> null
// undefined <==> undefined <==> undefined

*/