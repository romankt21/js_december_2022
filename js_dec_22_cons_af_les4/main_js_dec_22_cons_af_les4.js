// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b) {
//
//     return a * b
// }
//
// console.log(rectangle(5, 6));


//  //  створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function fun (text, numb) {
//     for (const textElement of text) {
//         document.write(`<ul>`)
//         document.write(`<li> ${text} </li>`)
//         document.write(`</ul>`)
//     }
//
// }
//
// fun('tre', 3)


// function fun1 (text1, numb1) {
//     for (let i = 0; i < numb1; i++) {
//
//         document.write(`<ul>`)
//         document.write(`<li> ${text1} </li>`)
//         document.write(`</ul>`)
//     }
//
// }
//
// fun1('tre', 3)
//
//
// function fun2 (text2, numb2) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < numb2; i++) {
//
//
//         document.write(`<li> ${text2} </li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// fun2('tre', 3)


//  // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['str', 1, 55, true, [1, 5, -25]]
//
// function fun (arr) {
//     document.write(`<ul>`)
//
//     for (const item of arr) {
//         document.write(`<li> ${item} </li>`)
//     }
//     document.write(`</ul>`)
// }
//
// fun(array)

function foo (name, age) {
    let user = {name, age};
    console.log(user)
    let x = 0;

    return{
        getName() {
            return user.name;
        },
        getAge() {
            return user.age
        },
        countX() {
            return ++x;
        }
    }
}

// console.log(foo('vasyl', 33))
let foo1 = (foo('vasyl', 33));

console.log(foo1.getName());
console.log(foo1.getAge());
console.log(foo1.countX())
console.log(foo1.countX())
console.log(foo1.countX())

// 57,36