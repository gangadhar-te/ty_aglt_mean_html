// console.log('Hello people');

// var demo = 'Gurunath';
// console.log(demo);

// //number data type
// var numeric = 1/2;
// console.log(numeric);
// console.log(typeof(numeric));

// //string data type
// var names = 'Mamta';
// console.log(names);
// console.log(typeof names);

// //boolean
// var isGood = false;
// console.log(isGood); 
// console.log(typeof isGood);

// //null
// var abc = null;
// console.log(abc);
// console.log(typeof abc);

// //undefined
// var xyz;
// console.log(xyz);
// console.log(typeof xyz);

// var person = {
//     name:'Rajee',
//     age:24,
//     place:'Andhra',
//     isMarried:false
// };
// console.log(person);

// var person1 = new Object();
// person1.name = 'Gurunath';
// person1.age = 25;
// person1.place = 'Dharwad';
// person1.isMarried = false;
// console.log(person1);

// var person2 = new Object();
// person2 = {
//     name:'Mamta',
//     age:24,
//     place:'Mumbai',
//     isMarried:false
// };
// console.log(person2);

// console.log(person2.place);

// person2.company = 'Agiliztech';
// console.log(person2);

// var fruits = ['apple','banana','mango','kiwi'];    //homogeneous array
// console.log(fruits[3]);
// fruits[1] = 'cherry';
// console.log(fruits);

// var arr = [1,'prabhanjan',true,,null]   //heterogenous array
// arr[3] = 'Hi';
// arr.place = 'Dharwad';
// console.log(arr);

// var date = new Date();
// console.log(date.getHours());

// console.log(Math.PI);
// var decimal = 64;
// console.log(Math.ceil(decimal));
// console.log(Math.floor(decimal));
// console.log(Math.abs(decimal));
// console.log(Math.sqrt(decimal));

// var x = 12;
// x++;
// console.log(x);

// var y = x + 10;
// console.log(y);
// var z = x + y;
// console.log(z);

// x += 10;
// //x=x+10
// console.log(x);

// var a = 19;
// var b = 15;

// if(a>b){
//     console.log(`The greater number is ${a}`);
// }
// else{
//     console.log(`The greater number is ${b}`);
// }

// var age = 21;
// var status = (age>=18) ? 'Adult' : 'Minor';
// console.log(status);

//and
// 0  0 => 0
// 0  1 => 0
// 1  0 => 0
// 1  1 => 1

//or
// 0  0 => 0
// 0  1 => 1
// 1  0 => 1
// 1  1 => 1

// var age = 19;
// var school = 'govt'

// if (age<18 || school=='govt'){
//     console.log('schlr given');
// }
// else{
//     console.log('not given');
// }

// var a = 23;
// var b = 34;

// Named function
function add(a,b){
   var x = a+b;
   console.log(x); 
//    return x;
};
add(5,46);

// var result = add(67,34);
// console.log('the sum of two no is' ,result);

// //Anonymous function / Function Expression
// var funcVar = function(a,b){
// console.log('the sum is ' , a+b);
// };

// funcVar(4,6);

// //IIFE function
// (function(a,b){
//     console.log('the sum is ' , a+b);
//     })(7,6);

// //arrow function
// var arrow = (x,y) => console.log('product is', x*y);

// arrow(5,6);


