// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let lengthA = 'hello world';
// console.log(lengthA.length);
//
// let lengthLorem = 'lorem ipsum'
// console.log(lengthLorem.length);
//
// let lengthJava = 'javascript is cool';
// console.log(lengthJava.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let UpCasHello = 'hello world'
// let upperCase = UpCasHello.toUpperCase();
// console.log(upperCase);
// console.log(UpCasHello.toUpperCase());
//
// let UpCasLorem = 'lorem ipsum';
// console.log(UpCasLorem.toUpperCase());
//
// let UpCasJava = 'javascript is cool';
// console.log(UpCasJava.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let LowCasHello = 'HELLO WORLD';
// console.log(LowCasHello.toLowerCase());
//
// let LowCasLorem = 'LOREM IPSUM';
// console.log(LowCasLorem.toLowerCase());
//
// let LowCasJava = 'JAVASCRIPT IS COOL';
// console.log(LowCasJava.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let splitStr = str.split();
//     console.log(splitStr);
// console.log(Array.isArray(splitStr));



//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let mapArr = array.map(value => value.toString());
// console.log(mapArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,descending) // [21,11,3]

// let nums = [11,21,3]
//
// sortNums = (arr, direction) => {
//     switch (direction){
//         case 'ascending':
//             let sort = arr.sort((a, b) => {
//                 return a -b
//             })
//             console.log(sort);
//             break;
//
//         case 'descending':
//             let sort1 = arr.sort ((a, b) => {
//                 return b - a
//         })
//             console.log(sort1)
//             break
// default:
//     console.log('невірно');
//     }
//
// }
// sortNums(nums, 'ascending');
// sortNums(nums, 'descending');
// sortNums(nums, 'аааа');





// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortMonth = coursesAndDurationArray.sort((m1, m2) => {
    return m1.monthDuration - m2.monthDuration
});
console.log(sortMonth);

let filterMon = coursesAndDurationArray.filter(value => value.monthDuration > 5
);
console.log(filterMon);

let mapMon = coursesAndDurationArray.map  ((value, index) => ({id: index+1, title: value.title, monthDuration: value.monthDuration}))
console.log(mapMon)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker