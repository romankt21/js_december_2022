// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'anna'
//     }
// }
//
// let user2 = user;
// console.log(user === user2);
//
// let userCopy = {...user};
// // let userCopy = {...user, age: 123};
// console.log(userCopy === user); // false
//
// let user3 = {...user};
// // let user3 = {...user, wife: {...user.wife}};
// console.log(user3 === user); // false
// console.log(user3.wife === user.wife); // true
// //
// let clone = structuredClone(user);
// console.log(clone.wife === user.wife);


// let user = {
//     name: 'vasyl',
//     skils: ['html', 'js'],
// }
//
// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skils === userClone.skils);

// let user = {
//     name: 'vasyl',
//     skils: ['html', 'js'],
// }
//
// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skils === userClone.skils);
//
//
// let clone = structuredClone(user);
// console.log(clone.skils === user.skils);