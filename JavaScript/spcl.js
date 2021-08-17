//function closure-we can write a func inside another func

// function outer(){
//     var msg = 'Hi i am a outer variable';
//     console.log('this is inside a outer function');
//     inner();
//     // console.log(word);
    
//     function inner(){
//         var word = 'Hi i am a inner variable';
//         console.log('this is inside a inner function');
//         console.log(msg); 
//     }
// }
// outer();

//return a function(function chaining)

// function test(){
//     console.log('test');
// };
// function demo(){
//     console.log('demo');
//     return test;
// };
// function sample(){
//     console.log('sample');
//     return demo;
// };

// sample()()();

//Callback function

// var x = function(){
//     console.log('callback function');
// };

// var y = function(callback){
//     console.log('do something');
//     callback();
// };

// y(x);

 function add(a,b){
    return a+b;
};
var multiply = function(a,b){
    return a*b;
};

var calc = function(num1, num2, callback){
    return callback(num1,num2);
};
console.log(calc(2,3,add));