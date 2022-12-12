
/*

// Defining Variables to the class
function class_name() {
    // static assignments
    this.sid=12;
    this.sname="Abhi";
    this.sfee=38000;
}

let obj = new class_name();
console.log(obj.sid, obj.sname, obj.sfee);          //  12 Abhi 38000


console.log(obj);
class_name {
  sid: 12,
  sname: 'Abhi',
  courses: [ 'Java', 'React', 38000 ]
}


function class_name(arg1, arg2, ...arg3) {
    // Dynamic assignments
    this.sid = arg1;
    this.sname = arg2;
    this.scourses = arg3;
}

let obj = new class_name(12, "Abhi", 'Java', "React", 38_000);
// console.log(obj);         

console.log(obj.arg1, obj.arg2, obj.arg3);           //  undefined undefined undefined
console.log(obj.sid, obj.sname, obj.scourses);        // 12 Abhi [ 'Java', 'React', 38000 ]



// Defining Methods to the class
function class_name(arg1, arg2, ...arg3) {

    this.getSinfo = function() {
        return "This is Student Info := ";
    };
    this.getSid = function() {
        return `std id is ${arg1}`;
    };
    this.getSname = function() {
        return `std id ${arg1} & Name is ${arg2}`;
    };
    this.getScourses = function() {
        return `std Courses are ${arg3}`;
    };
}

let obj = new class_name(12, "Abhi", 'Java', "React", 38_000);


console.log(obj); 

// class_name {
//     getSinfo: [Function (anonymous)],  
//     getSid: [Function (anonymous)],    
//     getSname: [Function (anonymous)],  
//     getScourses: [Function (anonymous)]
// }   
     
console.log(obj.getSinfo);             //    [Function (anonymous)]
console.log(obj.getSinfo()); 
console.log(obj.getSid());            
console.log(obj.getSname());            
console.log(obj.getScourses());   




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


*/


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