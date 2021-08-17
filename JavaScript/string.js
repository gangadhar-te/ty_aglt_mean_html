var wish = 'Good Morning';
console.log(wish);

console.log(wish.charAt(3));
console.log(wish.includes('Good'));
console.log(wish.lastIndexOf('o'));
console.log(wish.toUpperCase());
console.log(wish.split('o'));


var reversedWish = wish.split('').reverse().join('')
console.log(reversedWish);

for(var i=1; i<=5; i++){
    console.log('*'.repeat(i));
}