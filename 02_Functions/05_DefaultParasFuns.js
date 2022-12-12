
/*

function fun_one(sid=12, sname='abhi', sem, age) {
    console.log(`${sid} <==> ${sname} <==> ${sem} <==> ${age}`);
}

fun_one();                              //  12 <==> abhi <==> undefined <==> undefined
fun_one('3-sem', 24);                   //  3-sem <==> 24 <==> undefined <==> undefined
fun_one(undefined, null,'3-sem', 24);   //  12 <==> null <==> 3-sem <==> 24

// fun_one(,,'3-sem', 24);              //  SyntaxError: Unexpected token ','

fun_one(44, 'nani','5-sem', 25);        //44 <==> nani <==> 5-sem <==> 25   


function fun_two(sid=12, sname='abhi', courses=[], marks={}) {
    console.log(`${sid} <==> ${sname} <==> ${courses} <==> ${marks}`);
}

fun_two();                              //  12 <==> abhi <==> undefined <==> undefined
fun_two('3-sem', 24);                   //  3-sem <==> 24 <==> undefined <==> undefined
fun_two(undefined, null,'3-sem', 24);   //  12 <==> null <==> 3-sem <==> 24

// fun_two(,,'3-sem', 24);              //  SyntaxError: Unexpected token ','

fun_two(null, null, null, null,);      //   null <==> null <==> null <==> null
fun_two(undefined, undefined, undefined, undefined);       //   12 <==> abhi <==>  <==> [object Object] 

fun_two(44, 'gani', ['java', 'aws'], {lags:"97%", groups:"80%"}); 
// 44 <==> gani <==> java,aws <==> [object Object]

// For {lags:"97%", groups:"80%"} value o/p is [object Object] ?

*/

function fun_three(sid, sname='abhi',...courses) {
    console.log(`${sid} <==> ${sname} <==> ${courses}`);
}

fun_three();                                        //  undefined <==> abhi <==>                    
fun_three(12, undefined, 10_000);                   // 12 <==> abhi <==> 10000 
fun_three(14, 'hari', 'java','c++');                //  14 <==> hari <==> java,c++
fun_three(undefined, undefined, undefined);         //  undefined <==> abhi <==>
fun_three(null, null,null);                         //  null <==> null <==>           

