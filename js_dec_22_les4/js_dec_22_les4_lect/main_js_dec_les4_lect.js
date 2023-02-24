// function supercalculatoor (num1, num2) {
//     let obj = {
//         dif: num1 - num2,
//         add: num1 + num2
//     }
//
//     return obj;
// }
//
// let x = supercalculatoor(10, 20)
// console.log(x)
//
// fu()
// function fu() {
//     console.log(12)
// }
//
// function fu() {
//     console.log(356)
// }

// function calc() {
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//
// }
//
// calc(10, 20, 30, 40);


// function calc() {
//     let basket = 0;
//     for (const num of arguments) {
//         basket= basket + num;
//
//     }
//     return  basket
//
// }
//
// console.log(calc(10, 20, 30, 40));

// function calc2(...rest) {
//     console.log(rest)
//
// }
// calc2(1, 2, 3, 4);

// function  outer () {
//     function inner () {
//         return 100
//     }
//
//     return inner()
// }
//
// console.log(outer())



// function  outer (inner) {
//    return  inner () ;
//     }
//
//     let outer1 = outer(function () {
//         return 100
//         }
//     )
//
//
// console.log(outer1);

// function outer(){
//     let x = 100;
//
//     function inner() {
//         return x
//     }
//
//     return inner;
//     }
//
// console.log(outer())


// function outer() {
//     let x = 100;
//     function inner() {
//         return x;
//     }
//
//     return inner;
// }
//
// console.log(outer()())

// function userCreator(name) {
//     let user = {name: name}
//
//     let proxy = {
//         getName: function (){
//             return user.name
//         },
//
//         setName: function (name) {
//             if (typeof name === 'string') {
//                 user.name = name;
//             } else {
//
//                 console.log('change')
//             }
//
//         },
//     }
//     return proxy;
// }
//
// let u1 = userCreator('vasya');
// console.log(u1);
// u1.setName('kokos');
// let name = u1.getName();
// console.log(name)


// let user = {
//     name: 'vasyl',
//     greeting: function () {
//         console.log('hello my name is ' + this.name)
//     },
// }
// user.greeting()


let user = {
    name: 'vasyl',
    greeting: function () {
        console.log('hello my name is ' + this.name)
    },
}
user.greeting()

// 1.19.40