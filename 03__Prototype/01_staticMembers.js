

                                        // Prototype ==> Inheritence
// Prototype with static members
function class_one() {
    this.p_name = "Abhi__1"
}

function class_two() {
    this.c_name = "Abhi__2"
}

//Child             = Extend        Parent
class_two.prototype = Object.create(class_one.prototype);       //  Prototype

let ch_obj = new class_two();
let pa_obj = new class_one();

console.log(ch_obj.c_name, ch_obj.p_name);      //  Abhi__2 undefined
console.log(pa_obj.p_name, pa_obj.c_name);      //  Abhi__1 undefined

// ****> Prototype wonn't applicable for static members

