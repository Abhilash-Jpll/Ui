function fun_one(arg1,arg2,arg3) {
    console.log(`${arg1} <==> ${arg2} <==> ${arg3}`);
}


fun_one();
fun_one("Abhi");
fun_one("Abhi", null, undefined);
fun_one(null, null, null);
fun_one(undefined, undefined, undefined);

/*

// undefined <==> undefined <==> undefined
// Abhi <==> undefined <==> undefined     
// Abhi <==> null <==> undefined
// null <==> null <==> null
// undefined <==> undefined <==> undefined

*/


