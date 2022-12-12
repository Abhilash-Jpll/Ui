
// Java Script wonn't supports Method OverLoading, supports Method Overridding only.
// Bcz, we cann't differenciate methods with args in JS, bcz of undefined data type

function class_p() {
}
class_p.prototype.getPar = function() {
    return "Abhi__1";
};

function class_c() {
}

class_c.prototype = Object.create(class_p.prototype);
class_c.prototype.getPar = function() {
    return "Abhi__2";
}

let obj = new class_c();
console.log(obj.getPar());          //  Abhi__2