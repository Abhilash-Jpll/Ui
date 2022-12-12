
/*

function fun_one(...arg) {
    console.log(arg);
}

fun_one();                  //  []
fun_one(10, 20, 30);        //  [ 10, 20, 30 ] 
fun_one("Nani", "Soni");    //  [ 'Nani', 'Soni' ]
fun_one("Nani", 25);        //  [ 'Nani', 25 ]  


function fun_one(...arg1, ...arg2) {        //  SyntaxError: Rest parameter must be last formal parameter
    console.log(arg);
}


function fun_one( ...arg2, arg1) {        //  SyntaxError: Rest parameter must be last formal parameter
    console.log(arg1, arg2);
}
*/


function fun_one(arg1, ...arg2) {        //  SyntaxError: Rest parameter must be last formal parameter
    console.log(arg1, arg2);
}


fun_one("Nani", 25, "hari");           // Nani [ 25, 'hari' ]