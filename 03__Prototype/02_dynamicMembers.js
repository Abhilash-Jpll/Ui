
// Prototype with dynamic members
function class_p() {
};
class_p.prototype.var_p = "par_var";
class_p.prototype.getPar = function() {
    return "par_method";
};

function class_c() {
}
// class_c.prototype.var_c = "ch_var";
class_p.prototype.getCh = function() {
    return "ch_method";
};
class_c.prototype = Object.create(class_p.prototype);
class_c.prototype.var_c = "ch_var";

let ch_obj = new class_c();
console.log(ch_obj.var_p, ch_obj.getPar());             //  par_var par_method
console.log(ch_obj.var_c, ch_obj.getCh());             //   ch_var ch_method