// var obj ={nums:4};

// var addToThis = function(a){
//     return this.nums +a;
// };
// console.log(addToThis.call(obj,5));

// var arr=[2];

// console.log(addToThis.apply(obj,arr));

// var bound = addToThis.bind(obj);

// console.log(bound);

// console.log(bound(9));

//STUDENT_OBJECT

var student = {age:20};

var ageOfStudent = function(){
    return this.age;
}
var studentAge = ageOfStudent.bind(student);
console.log(studentAge(this.age));
