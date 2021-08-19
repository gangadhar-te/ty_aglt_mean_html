// const brand = 'HRX';

// console.log('1',brand);        //global scope

// function getBrand(){
//     const brand = 'Adidas';
//     console.log('2',brand);     //function scope
// }

// getBrand();
// console.log('3',brand);

// if(true){
//     const brand = 'Nike';
//     console.log('4',brand);      //block scope
// };

// console.log(`5 ${brand}`);

//spread operator
// let arr = [2,4,6,8,5,6];
// let arr2 = [10,20,30,...arr];
// console.log(arr2);

//rest operator
// function getData(...hello){
//     console.log(hello);
//     console.log(hello[1]);
// }
// getData(10,20,30);

//array destructuring
// let arr = ['mamta','prabhanjan','gurunath','rajee'];
// let [a,b,...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

//object destructuring
// let obj = {
//     name: 'abc',
//     age: 20
// };

// let {name,age,desig:role = 'xyz'} = obj;

// console.log(name);
// console.log(age);
// console.log(role);

// function add(a,b=10){
//     console.log(a+b);
// };

// add(45);