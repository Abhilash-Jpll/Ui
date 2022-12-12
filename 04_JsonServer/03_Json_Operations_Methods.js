

// let obj1 = {
//     sid: 13
//     , sname: 'Giri'
//     , sfee: 55_000
// }

// //                                          Read Operation on JSON
// console.log(obj1);
// //  { sid: 12, sname: 'Abhi', sfee: 25000 }

// console.log(obj1.sid, obj1.sname, obj1.sfee);
// //   12 Abhi 25000

// for (key in obj1) {
//     console.log(key, typeof key, obj1[key]);
// }
// // sid string 12
// // sname string Abhi
// // sfee string 25000

// //                                          Write Operation on JSON
// obj1.sage =28;
// console.log(obj1);
// // { sid: 13, sname: 'Giri', sfee: 55000, sage: 28 }


// //                                          Update Operation on JSON   
// obj1.sname = 'Abhilash';
// console.log(obj1.sname);
// // Abhilash

// //                                         Delete Operation on JSON
// delete obj1.sfee;
// console.log(obj1);
// //  { sid: 12, sname: 'Abhilash' }

//                                              Object.freeze(obj2);
// let obj2 = {
//     sid: 13
//     , sname: 'Giri'
//     , sfee: 55_000
// }

// Object.freeze(obj2);
// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 55000 }

// obj2.sage =28;
// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 55000, sage: 28 }

// obj2.sfee = 88_0000;
// console.log(obj2.sfee);
// // 55000

// delete obj2.sname;
// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 55000 }


//                                              Object.seal(obj2);
// Object.seal(obj2);

// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 55000 }

// obj2.sage =58;
// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 55000, sage: 58 }

// obj2.sfee = 88_0000;
// console.log(obj2.sfee);
// // 880000

// delete obj2.sname;
// console.log(obj2);
// // { sid: 13, sname: 'Giri', sfee: 880000 }


//                          To Provide Customization on keys ===> Object.defineProperties()
// let obj3 = {
//     // sid: 
//      sid: 22
//     // sid: undefined
//     // sid: null
//     , sname: 'Giri'
//     , sfee: 55_000
// }

// Object.defineProperties(obj3, { "sid": { value: 12, writable: false } }
//     , { "sname": { value: 'abhi', writable: true } }
// );

// console.log(obj3);
// // { sid: 12, sname: 'Giri', sfee: 55000 }
// obj3.sid = 111;
// console.log(obj3.sid);
// //12 
// delete obj3.sid;
// console.log(obj3);
// // { sname: 'Giri', sfee: 55000 }


// obj3.sname = 'soni';
// console.log(obj3.sname);
// //soni
// delete obj3.sname;
// console.log(obj3);
// // { sfee: 55000 }

// //                            JSON Cloanning  <==> Immutability ( ... )
// let obj4 = {
//     sname : "abhi"  
// };
// console.log(obj4);          //  { sname: 'abhi' }

// let obj5 = {...obj4};
// console.log(obj5);          //  { sname: 'abhi' }


// obj4.key1 = "giri" ;
// console.log(obj4);         //   { sname: 'abhi', key1: 'giri' }
// console.log(obj5);         //   { sname: 'abhi' }

// obj4.sname = "nani" ;
// console.log(obj4);         //  { sname: 'nani', key1: 'giri' }
// console.log(obj5);         //  { sname: 'abhi' }

// obj5.sname = "jani" ;
// console.log(obj4);         //  { sname: 'nani', key1: 'giri' }
// console.log(obj5);         //  { sname: 'jani' }


// //                          JSON Cloanning  <==> Mutability ( = )
// let obj6 = {
//     sname : "abhi"  
// };

// let obj7 = obj6;

// console.log(obj6);          //  { sname: 'abhi' }
// console.log(obj7);          //  { sname: 'abhi' }


// obj6.key1 = "giri" ;
// console.log(obj6);         //   { sname: 'abhi', key1: 'giri' }
// console.log(obj7);         //   { sname: 'abhi', key1: 'giri' }

// obj6.sname = "nani" ;
// console.log(obj6);         //  { sname: 'nani', key1: 'giri' }
// console.log(obj7);         //  { sname: 'nani', key1: 'giri' }

// obj7.sname = "jani" ;
// console.log(obj6);         //  { sname: 'jani', key1: 'giri' }
// console.log(obj7);         //  { sname: 'jani', key1: 'giri' }


//                                      JSON Objects Merging

// let obj77 = {
//     sname1 : 'abhi'
// };
// let obj88 = {
//     sname2 : 'hari'
// };
// let obj99 = {
//     sname3 : 'giri'
// };
// // If all Objects contains same key then ORiding will happen

// // After ES6
// let mer_obj1 = {...obj77, ...obj88, ...obj99};
// console.log(mer_obj1);      //   { sname1: 'abhi', sname2: 'hari', sname3: 'giri' }

// // Before ES6
// let mer_obj2 = Object.assign(obj77, obj88, obj99);
// console.log(mer_obj2);      //   { sname1: 'abhi', sname2: 'hari', sname3: 'giri' }


//                                          If JSON Obj Contains Funs              
// let obj = {
//     "logIn": logIn
// };

// function logIn() {
//     return "Welcome to Abhi World....!"
// }

// console.log(obj.logIn());                       //  Welcome to Abhi World....!

let obj = {
    "abhi": () => { return " Welcome to Abhi World....!"}
    ,"hari": () => { return " Welcome to Hari World....!"}
    ,"giri": () => { return " Welcome to Giri World....!"}
};

console.log(obj.abhi());                       //  Welcome to Abhi World....!
console.log(obj.hari());                       //  Welcome to Hari World....!
console.log(obj.giri());                       //  Welcome to Giri World....!



/*

Object.freeze(obj1); ===> Read & Write - ok, but Update & Delete - NotOk
Object.seal(obj1);   ===> Read,Write & Update- ok, but Delete - NotOk

// Object.defineProperties() ==> writable: true/false delete Operation is applying Why ?

// After Clonning one both objs are 'Independent', this is calle Immutability(...)
// After Clonning one both objs are 'Dependent', this is calle Mutability(=)

*/





