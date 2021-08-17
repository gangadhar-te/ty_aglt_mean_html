var fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi', 'jackfruit', 'grapes'];
// console.log(fruits);
// console.log(fruits.length);

// fruits.shift();
// console.log('the array after shift ', fruits);

// fruits.unshift('strawbeery','watermelon');
// console.log('the array after unshift', fruits);

// fruits.pop();
// console.log('the array after pop', fruits);

// fruits.push('mosambi');
// console.log('the array after push ', fruits);

// fruits.forEach((value,index,array) =>{
//    console.log('value is', value);
// //    console.log('index is', index);
// //    console.log('array is', array);
// });

// fruits.map((value,index) => {
// console.log('good',value);
// console.log(index);
// });


var num = [2,3,56,67,33,32,56,27];
console.log(num);
var returnedElements = num.filter((value,index) => {
    return value >30;
})
console.log(returnedElements);
