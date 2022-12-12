

let obj1 = {
  sid: 12
  , sub_one: 'HTML'
  , sub_two: 'CSS'
  , sub_three: 'React'
}

// console.log(typeof obj1);
// console.log(typeof (obj1));    //  object

let str1 = JSON.stringify(obj1);
// console.log(typeof (str1));    //  string

let obj2 = JSON.parse(str1);
// console.log(typeof (obj2));    //  object


for(let key in obj1) {
  console.log(key, typeof key, obj1[key]);    //  object
}
/*
  
for(let key in obj1) {
  console.log(key, typeof key, obj1[key]);    //  object
}
OP :--------
sid string 12
sub_one string HTML
sub_two string CSS
sub_three string React

TypeError: obj1 is not a function ===> obj1(key) in for loop.
*/