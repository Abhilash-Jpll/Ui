
function class_one() {
};
class_one.prototype.add = function() {
    return "Nothing to add";
};
class_one.prototype.add = function(arg1, arg2) {
    return arg1+arg2;
};
class_one.prototype.add = function(arg1, arg2, arg3) {
    return arg1+arg2+arg3;
};
class_one.prototype.add = function(arg1, arg2, arg3, arg4) {
    return arg1+arg2+arg3+arg4;
};

let obj = new class_one();

console.log(obj.add());                 //  NaN           
console.log(obj.add(10, 20));           //  NaN  
console.log(obj.add(10, 20, 30));       //  NaN  
console.log(obj.add(10, 20, 30,40));    //  100  


/*

Java Script always calls this method function(arg1, arg2, arg3, arg4) only amonge from other OverLoaded 
methods by Passes 10, 20, 30 ,undefind as arguments.
Hence Java Script wonn't supports Method OverLoading, supports Method Overridding only.
Bcz, we cann't differenciate methods with args in JS, bcz of undefined data type

*/
