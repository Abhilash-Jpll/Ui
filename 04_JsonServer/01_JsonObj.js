
//JavaScript Variable
let var_name = "React";

//JavaScript Array
let arr = ['HTML', 'CSS', "React"];

// //JavaScript Object or JSON Object
let obj1 = {
    // "sid": 12
    // 'sid': 12
    // `sid`: 12 ==> NR
    sid: 12
    , sname: 'Abhi'
    , sfee: 25_000
}




/*
    "key", 'key' are Optional, but for value if it is string "" / '' is Mandatory, but `` ==> NR

Ex2:=
====

//JavaScript Object or JSON Object
let std = {
    sid: 12
    , personalInfo: ['abhi', 28, hobbies= ['Cricket', 'Movies']]
    , courses: {
        sub_one: 'HTML'
        , sub_two: 'CSS'
        , sub_three: 'React'
    }
    , sfee: 1_25_000
    , sgrade: 'A'
}

console.log(std);
console.log("The Object is: "+std);
console.log(`The Object is: ${std}`);
  console.log("The Object is:", std);
console.log(std.personalInfo);
console.log(std.courses);
console.log(std.personalInfo.hobbies);      //  undefined
{
  sid: 12,
  personalInfo: [ 'abhi', 28, [ 'Cricket', 'Movies' ] ],
  courses: { sub_one: 'HTML', sub_two: 'CSS', sub_three: 'React' },
  sfee: 125000,
  sgrade: 'A'
}
[ 'abhi', 28, [ 'Cricket', 'Movies' ] ]
{ sub_one: 'HTML', sub_two: 'CSS', sub_three: 'React' }


// 'hobbies'= ['Cricket', 'Movies']  ===> SyntaxError: Invalid left-hand side in assignment
*/