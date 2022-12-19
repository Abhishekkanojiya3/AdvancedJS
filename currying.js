// let multiply = function (x , y){
//     console.log(x*y);
// }

let multiply = function(x){
    return function (y){
        console.log(x*y);
    }
}

//let multiplyByTwo = multiply.bind(this,2);

let multiplyByTwo= multiply(2);
multiplyByTwo(3);

multiplyByTwo(5);
