// console.log('start');
// let x = 0;
//
// setTimeout(function () {
//     console.log('async 1');
//     x = 100500;
// }, 1000);
//
// setTimeout(function () {
//     console.log('async 2');
//     x = 100500;
// }, 500);
//
//
// console.log('end', x); // 0

// let promise1 =
//     new Promise((resolve) => {
//         let x = 0;
//         setTimeout(() => {
//             x++;
//             console.log('st1')
//             resolve(x);
//         }, 1000);
//
//     })
//         .then((value) => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     value++;
//                     console.log('st2')
//                     resolve(value);
//
//                 }, 1000)
//             })
//         })
//         .then(value => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log('st3', value);
//                 }, 1000)
//             })
//         });
//

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if ('ok') {
//             resolve('okten');
//         } else {
//             reject('something went wrong');
//         }
//     },   500);
//         })
// . then(value => {
//
// })
//     .catch(reason => {
//
//     })


// let usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//
// let postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json());

// Promise.all([usersPromise, postsPromise])
//     .then(value => {
//         console.log(value);
//     });

// Promise.race([usersPromise, postsPromise])
//     .then(value => {
//         console.log(value);
//     });



// Promise.any([usersPromise, postsPromise])
//     .then(value => {
//         console.log(value);
//     });



// let requestFunction = async function () {
//     let response1 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
//     let user = {};
//     let response2 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
//     let response3 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
//     let response4 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
//     console.log(response1, response2);
// }
//
// requestFunction();


let requestFunction = async function () {
    let response1 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    let user = {};
    let response2 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    let response3 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    let response4 = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    console.log(response1, response2);
}

requestFunction();

