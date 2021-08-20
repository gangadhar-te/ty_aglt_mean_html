export {}
var message = 'Good MOrning';

var myName:string;
myName = 'abc';

let myAge:number = 34;

let IsTrue:boolean = true;

let hobbies:Array<string> = ['riding','sports'];

//tuples
let student:[string,number,boolean] = ['male',22,false];
student = ['female',23,true];

enum Color{
    Red,
    Blue = 40,
    Green,
    Orange
}
let myColor:Color = Color.Red;
console.log(myColor);

//any
let car : any = 'BMW';
car = {brand: 'BMW',series:3};

//functions
function returnMyName():void {
// return 'hi';
};
returnMyName();

function multiply(value1:number,value2:number):number{
    return value1*value2;
};
multiply(3,8);

let abc = 35;
console.log(typeof abc);

let userdata:{name:string, age:number} = {
    name: 'Roy',
    age:34
};

userdata = {
    age:50,
    name:'John'
}

//union types
let myWork:number | string | boolean = 24;
myWork = 'Developer';
myWork = true;

//check types
let finalValue = '30';
if(typeof finalValue === 'number'){
    console.log('Final value is a number');
}else{
    console.log('Final value is not a number');
    
}