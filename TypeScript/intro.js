"use strict";
exports.__esModule = true;
var message = 'Good MOrning';
var myName;
myName = 'abc';
var myAge = 34;
var IsTrue = true;
var hobbies = ['riding', 'sports'];
//tuples
var student = ['male', 22, false];
student = ['female', 23, true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 40] = "Blue";
    Color[Color["Green"] = 41] = "Green";
    Color[Color["Orange"] = 42] = "Orange";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
//any
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
//functions
function returnMyName() {
    // return 'hi';
}
;
returnMyName();
function multiply(value1, value2) {
    return value1 * value2;
}
;
multiply(3, 8);
var abc = 35;
console.log(typeof abc);
var userdata = {
    name: 'Roy',
    age: 34
};
userdata = {
    age: 50,
    name: 'John'
};
//union types
var myWork = 24;
myWork = 'Developer';
myWork = true;
//check types
var finalValue = '30';
if (typeof finalValue === 'number') {
    console.log('Final value is a number');
}
else {
    console.log('Final value is not a number');
}
