const abc = new Promise((resolve,reject) => {
let a = true;
if(a){
    resolve('i kept my promise');
}
else {
    reject('promise rejected');
}
});

// console.log(abc);

abc.then((res) => {
console.log(res);
}).catch((err) => {
    console.log(err);
})