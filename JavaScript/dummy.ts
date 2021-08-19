var c = 'hey People';
c = 'hello';

//string
var myName:string = 'gagan';
// myName = 45;
console.log(myName);

//number
let myAge:number = 24;
console.log(myAge);

//boolean
let hasHobbies: boolean = true;
let myRealAge: number;
myRealAge = 89;

//array
let hobbies: any[] = ['riding','sports']
console.log(hobbies);


//tuples
let address :[string,number,boolean,string]=['MG',78,true,'you'];
 address =['hi',45,false,'hello'];
 console.log(address);
  console.log(typeof(address));
  
  //enum
  enum Color{
      Red,
      Blue,
      Green,
      Orange
  }
  let myColor: Color = Color.Blue;
  console.log(myColor);

  //any 
  let car: any ='BMW';
  console.log(car);
  car ={brand: 'BMW',series:3}
  console.log(car);

  //functions
  function returnMyName(): void{
    //   return myAge;

  } 
  console.log(returnMyName());
  

  function multiply(value1,value2): number{
    //   if( value2 === 'gagan'){
    //       return value1;
    //   } 
    //   else{
    //       return value1+10;
    //   }
      return value1*value2;
  }
  console.log(multiply(2,'gadan'));


  function multiply1(value1:number,value2:number): number{
      return value1*value2;
  }
  console.log(multiply1(2,42));

  let abc = 35;
  console.log(typeof(abc));

//   let userData:{name:string, age:number} = {
//     name:'roy',
//     age:37
// }
// userData= {
//     name:'gagan',
//     age:75
// }
// console.log(userData);

// let complex:{data:number[],output:(all:boolean)=>number[]}={
//     data:[1,2,3,4,9],
//     output: function(all: boolean):number[]{
//       return this.data;  
//     }
// }

// console.log(complex.output);

// class Student{
//     //  public name:string;
//     //  age: number;
//      constructor(public name:string, private age: number){
//     //    this.name= name;
//     //    this.age = age;          
//      }
// }
// let s1=  new Student('Mohan',21);
// console.log(s1);

// interface Point{
//     x: number, 
//     y: number
// }

// let drawPoint =(point) =>{
//     //
// }
// drawPoint({
//     x:1,
//     y:2
// });

// //uniion types
// let myRecentAge: number | string | boolean  = 24;
//  myRecentAge = '25';
//  myRecentAge = true;

//  //check types 
// let  finalValue = 30;
// if(typeof finalValue === 'number'){
//     console.log('Final value is a number');
// }else{
//     console.log('Final value is not a number');
    
// }
// //never
// //  function neverReturns():never {
// //      return 'hello'
// //     //   throw new Error('OHH Error')
// //  }
// //  neverReturns();


// //nulllable types
//  let canBeNull= 12;
//  canBeNull = null;

// console.log(canBeNull);

//  let canAlsoBeNull = null;
//  canAlsoBeNull = 21;
//  console.log(canAlsoBeNull);

//  class Person{
//     name!: string;
//     private type!: string;
//     protected age : number =25;

//     constructor(name:string,public username: string){
//         this.name=name;

//     }
//     printAge(){
//         console.log(this.age);
//         this.setType('awesome guy');
        
//     }
//     protected setType(type:string){
//         this.type=type;
//         console.log(this.type);
        
//     }
// }

// const person = new Person('Gagan','gagan')
// console.log(person);
// person.printAge();
// //person.setType('cool  guys');

// //inheritance
//  class Gagan extends Person{
//      //name ='Rahul';

//      constructor(username: string){
//          super('Rakesh',username);
//          this.age=31;

//      }
//  }

//  const gagan = new Gagan('SAndeep');
//  console.log(gagan);

//  //namespace
//      namespace MyMath{
//     const PI=3.14;
//      export function calculateCircumference(diameter: number){
//         return diameter * PI;
//     }
//      export function calculateRectangle(width: number, length: number){
//         return width * length;
//     }
//   }  
//   console.log(MyMath.calculateRectangle(10,20));
//   console.log(MyMath.calculateCircumference(3));
  
//   const PI = 56;

//   //modules
// [9:06 am, 19/08/2021] Ty Soumyajith Sarkar: //Polymorphism



// class Parent {  
//     name: string;  
//     constructor(name: string) {  
//         this.name = name;  
//     }  
//     processName() {  
//         console.log('processName method in parent class',name)  
//     }  
// }  
// class Child extends Parent {  
//     constructor(name: string) {  
//         super(name);  
//     }  
//       processName() {  
//         console.log('processName method in Child class',name)  
//     }  
// }  
// let myObject = new Child("Kiran");  
// myObject.processName()  
// let myObject1= new Parent("john");  
// myObject1.processName()  



// //Encapsulation

// class Encapsulate {
//     str:string = "hello"
//     private str2:string = "world"
// }

// var obj = new Encapsulate();
// console.log(obj.str);     //accessible
// obj.str2 = "something else";
// console.log(obj.str2);   //compilation Error as str2 is private

// //Polymorphism



// class Parent {  
//     name: string;  
//     constructor(name: string) {  
//         this.name = name;  
//     }  
//     processName() {  
//         console.log('processName method in parent class',name)  
//     }  
// }  
// class Child extends Parent {  
//     constructor(name: string) {  
//         super(name);  
//     }  
//       processName() {  
//         console.log('processName method in Child class',name)  
//     }  
// }  
// let myObject = new Child("Kiran");  
// myObject.processName()  
// let myObject1= new Parent("john");  
// myObject1.processName()  



// //Encapsulation

// class Encapsulate {
//     str:string = "hello"
//     private str2:string = "world"
// }

// var obj = new Encapsulate();
// console.log(obj.str);     //accessible
// obj.str2 = "something else";
// console.log(obj.str2);   //compilation Error as str2 is private

// //Polymorphism



// class Teacher {  
//     name: string;  
//     constructor(name: string) {  
//         this.name = name;  
//     }  
//     processName() {  
//         console.log('processName method in Teacher class',this.name)  
//     }  
// }  
// class Student extends Teacher {  
//     constructor(name: string) {  
//         super(name);  
//     }  
//       processName() {  
//         console.log('processName method in Student class',this.name)  
//     }  
// }  
// let myObject1 = new Student("Saroj");  
// myObject1.processName()  
// let myObject2= new Teacher("Soo");  
// myObject2.processName()

// abstract class Person {
//     abstract name: string;

//     display(): void{
//         console.log(this.name);
//     }
// }

// class Employee extends Person { 
//     name: string;
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(); // must call super()
        
//         this.empCode = code;
//         this.name = name;
//     }
// }

// let emp: Person = new Employee("shiva");
// emp.display();