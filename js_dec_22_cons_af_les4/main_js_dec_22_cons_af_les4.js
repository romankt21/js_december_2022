
// function rectangle (a, b) {
//
//     return a * b
// }
//
// console.log(rectangle(5, 6));

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


function fun1 (text1, numb1) {
    for (let i = 0; i < numb1; i++) {

        document.write(`<ul>`)
        document.write(`<li> ${text1} </li>`)
        document.write(`</ul>`)
    }

}

fun1('tre', 3)


function fun2 (text2, numb2) {

    document.write(`<ul>`)
    for (let i = 0; i < numb2; i++) {


        document.write(`<li> ${text2} </li>`)

    }
    document.write(`</ul>`)
}

fun2('tre', 3)

10/33