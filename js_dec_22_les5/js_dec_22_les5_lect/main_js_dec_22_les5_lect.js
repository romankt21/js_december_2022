// function calc (a, b) {
//     return a+b
// }
//
// console.log(calc(10, 30))

// let calc1 = function foo (a, b) {
//     return a+b
// }
//
// console.log(calc1(5, 4))
// console.log(foo(5, 4))

// let qwe = function (c, d) {
//     return c + d;
// };
// console.log(qwe(1, 2));
//
//
//
// let zxc = (a, b) => a + b
// console.log(zxc(10, 20));

// let calculator = (a, b, action) => {
//     let result;
//     if (action === '+'){
//         result = a +b;
//     } else if (action === '-') {
//         result = a - b;
//         }
//     return result;
//
// }
//
// console.log(calculator(5, 2, '+'))


// let arr = [11, 22, 33, 44, [5, 6, 7], 101, 111, 122, [-5, -15, -34]];
//
// let flatArray = [];
// function flatter (array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//
//         } else {
//             flatArray.push(item);
//         }
//     }
//
// }
// flatter(arr);
// console.log(flatArray);


// function foobar(callback) {
//     callback()
//     xxx()
//
// }
//
// let xxx = function () {
//     console.log('hello')
// };
//
// foobar(xxx)


// function calculator(a, b, action) {
//     action(a, b);
// }
//
// calculator(10, 20, function (a, b) {
//     console.log(a + b)
// })

// let users = [
//     {name: 'vasyl', age: 31, status: false},
//     {name: 'petro', age: 30, status: true},
//     {name: 'mykola', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'ganna', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andriy', age: 29, status: true},
//     {name: 'maria', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
//
// let filter = users.filter(function (user) {
//     return user.age > 30
// });
//
// console.log(filter)

// function filter (arr) {
//     let mas = [];
//     for (const item of arr) {
//         if (item % 2 === 0){
//             mas.push(item)
//         }
//     }
//
//         return mas
// }
//
// console.log(filter([1, 3, 22, 18, 5]));
//


function filter (arr, callback) {
    let mas = [];
    for (const item of arr) {
        if (callback(item)){
            mas.push(item)
        }
    }

        return mas
}

console.log(filter([1, 3, 22, 18, 5], function (item) {
    return item %2 === 0
}));


let users = [
    {name: 'vasyl', age: 31, status: false},
    {name: 'petro', age: 30, status: true},
    {name: 'mykola', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'ganna', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andriy', age: 29, status: true},
    {name: 'maria', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];

console.log(filter(users, function (item) {
    return item.age < 30
}))