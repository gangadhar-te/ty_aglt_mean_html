// fetch('./db.json').then((res) => {
// res.json().then((resp) => {
// console.log(resp);
// })
// })


var obj = {
    movie: 'Bhahubali',
    genre: 'thriller',
    hero: 'Prabhas'
};

// var x = JSON.stringify(obj);
// console.log(x);
// var y = JSON.parse(x);
// console.log(y);

localStorage.setItem('id',JSON.stringify(obj));
var a = localStorage.getItem('id');
console.log(JSON.parse(a));
// localStorage.removeItem('id')