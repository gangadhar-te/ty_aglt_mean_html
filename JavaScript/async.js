function getAnything(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve('success')
      },7000)
    })
}


async function getData() {
    console.log('start');            //1
    await getAnything().then((res) =>{     //2
      console.log(res);
    })
    console.log('end');               //3
}

getData();

console.log('some impt code');           //4



