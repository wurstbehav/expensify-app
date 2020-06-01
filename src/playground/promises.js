const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrew',
        //     age: 21
        // })
        reject('Something went wrong !')
    }, 4000);

})

console.log('before');


promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error', error);
})


console.log('after');
