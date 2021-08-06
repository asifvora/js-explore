// Functions Statement
function a(){
    console.log("a called")
}
a()

// Functions Expression
var b = function (){
    console.log("b called")
}
b()

// Functions Declaration
// Functions Statement also are same

// Anonymous Functions
// function () {
//     console.log("Anonymous")
// }


// Named Functions Expression
var c = function xyz(){
    console.log("Named Functions")
}
c()

// Different between Parameters & Aguments
function e(param1, param2){ //Parameters
    console.log(param1, param2)
}
e("Asif", "Vora") //Aguments

// First Class Functions
// first classs citizens
var f = function (param1){
    return function xyz(){
        console.log(param1,", First Class Functions")
    }
}
console.log(f("Hello")())


// Arrow Functions