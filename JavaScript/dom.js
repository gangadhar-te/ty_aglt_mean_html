// console.log('welcome to dom session');
// // var a = document;
// // a = document.forms;
// // console.log(a);

// var element = document.getElementById('myFirst');
// // element = element.className;
// // element = element.childNodes;
// // element = element.parentElement;
// element.style.color = 'red';
// // element.innerText = 'JavaScript is very famous'
// // element.innerHTML = '<h1>JavaScript is very famous</h1>'
// // console.log(element);

// var sel = document.getElementById('myFirst');
// sel.style.color = 'green';
// console.log(sel);


// function removeList(){
//     var a = document.querySelector('.unorder')
//     console.log(a);
//     console.log(a.childNodes);
//     a.removeChild(a.childNodes[0])
// }

var x = document.createElement('a');
x.innerText = 'Go To Youtube';
x.style.color = 'red';
x.style.textDecoration = 'none';
x.href = "https://www.youtube.com";
document.body.appendChild(x)