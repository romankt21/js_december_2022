// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let rectangle = (a, b)=> a * b;
// console.log(rectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r, pi)=> r * r * pi;
// console.log(circle(2, 3.14));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinder = (r, h, pi) => 2*pi * r * (r + h);
// console.log(cylinder(3, 4, 3.14))

// звичайна ф-ція
// function cylinder(r, h) {
//     const pi = 3.14;
//     return 2*pi * r * (r + h)
// }
//
// console.log(cylinder(3,4))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1, 0, true, 'str', [4, -5, 8]];
//     let dataArray = (arr) => {
//         for (const item of arr) {
//             document.write(`<ul>`)
//             document.write(`<li> ${item} </li>`)
//             document.write(` </ul> `)
//         }
//     }
// dataArray(array)


// проста функція

// let arr = [1, 0, true, 'str', [4, -5, 8]];
// function array (arra) {
//        for (const item of arra) {
//
//     document.write(`<ul>`)
//     document.write(`<li> ${item} </li>`)
//     document.write(` </ul> `)
//     }
//
// }
//
// array(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let someText = 'hello'
// let par = (text) => {
//      document.write(`<p>${text}</p>`)
// }
// par(someText)

// проста ф-ція
// function foo(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// foo('hello');
// foo('hi')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let threeElem = (text) => {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//
//     document.write(`</ul>`)
// }
//
// threeElem('july')

//  проста функція
// function foo(text) {
//     document.write(`<ul>`);
//
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
//
// }
// foo('hello')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let threeElem2 = (text, numb) => {
//        document.write(`<ul>`)
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//        document.write(`</ul>`)
// }
// threeElem2('january',3)
//

// звичайна ф-ція
// function foo (text, number){
//
//         document.write(`<ul>`);
//
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//
//
//     document.write(`</ul>`);
// }
// foo('hello', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = (arr) => {
//     document.write(`<ol>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// array([1, 5, true, 'january', 'february'])

// звичайна ф-ція

// let array = [1, 'str', true, [1, 3, -5]];
// function listCreator (arr) {
//         document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//
//         document.write(`</ul>`);
//   }
//
// listCreator(array);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     { id: 1, name: 'vasyl', age: 30},
//     { id: 2, name: 'ivan', age: 35},
//     { id: 3, name: 'mykola', age: 40},
//     ]
//
// let arrayName = (arrN) => {
//     for (const item of arrN) {
//
//     document.write(`<div>${item.id} ${item.name}  ${item.age}</div>`)
//     }
// }
// arrayName(arr)

// звичайна ф-ція

// let arr = [
//     { id: 1, name: 'vasyl', age: 30},
//     { id: 2, name: 'ivan', age: 35},
//     { id: 3, name: 'mykola', age: 40},
//     ]
//
// function foo(array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name}  ${item.age}</div>`)
//     }
// }
// foo(arr);


// - створити функцію яка повертає найменьше число з масиву
// let arr = [5, -56, 0, 31, 124]
//
// let minArr = (array) => {
//     let min = array[0]
//     for (let item of array) {
//         if (item < min) {
//             min =item
//         }
//
//     }
//             return min
//
// }
//
// console.log(minArr(arr));

//  звичайна функція
// let array = [2, 5, 25, -5,  1, 0 ,-15];
// function minNum (numbers) {
//     let min = numbers[0];  // берем перше число масиву
//
//     for (const item of numbers) {
//
//
//
//         if (item < min) {
//             min = item
//         }
//
//     }
//     return min
// }
//
// console.log(minNum(array));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let array = [1,2,10]
// let sumArr = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         sum += item
//
//     }
//     return sum
// }
//
// console.log(sumArr(array))


// звичайна функція

// let arraySum = [1, 2, 10];
// function sum (arr) {
//
//     let basket = 0;
//     for (const item of arr) {
//         basket  +=  item  //   basket  = basket + item
//
//     }
//     return basket
// }
//
// console.log(sum(arraySum))




// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let array =[11,22,33,44];
// let swap = (arr, index1, index2) => {
//    let v1 = arr[index1];
//    let v2 = arr[index2];
//
//    arr[index1] = v2;
//    arr[index2] = v1;
//
//
//     return arr
// }
//
// console.log(swap(array, 0, 1))


// звичайна функція
// function swap(arr,index1,index2) {
//
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//
//     arr[index1] = v2;
//     arr[index2] = v1;
//
//     console.log(arr)
//
// }
// swap([11,22,33,44],0,1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange =(sumUAH,currencyValues,exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//            return sumUAH / exchangeCurrency
//         }
//     }
//
//
//
// }
//
// console.log(exchange(10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42}
//     ],
//     'EUR'))

// звичайна функція

// function exchange (sumUAH,currencyValues,exchangeCurrency) {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//             return sumUAH/item.value
//         }
//     }
//
//
// }
//
// console.log(exchange(10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42}
//     ],
//     'EUR'))
//
//


// створити функцію, яка приймає будь яку кількість чисел, повертає найменше, а виводить найбільше (Math заборонено використовувати)

let maxMin = (...array) => {
    let min =array[0]
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
           max = array[i]
        }
        if (min > array[i]) {
            min = array[i]
        }



    }
    console.log(max)
    return min

}
let min = maxMin(1, 25, 358, -145, 0);
console.log(min)



