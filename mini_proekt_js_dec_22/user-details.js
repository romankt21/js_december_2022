let url = new URL(location.href);
let jsonUser = url.searchParams.get('data');
let user = JSON.parse(jsonUser);
console.log(jsonUser);
console.log(user);

for (const userAdr of user.adress) {
    console.log(userAdr)

}

let divUserDetails = document.createElement('div');
document.body.appendChild(divUserDetails);
divUserDetails.innerText =`id: ${user.id}, name: ${user.name}, username: ${user.username}, email: ${user.email} , address: ${(user.address.forEach)}`


let p = document.createElement('div')
document.body.appendChild(p);
p.innerText = '----------'

let dv = document.createElement('div');
document.body.appendChild(dv);
dv.innerText =`${jsonUser}`


//
// let postsButton = document.createElement('button');
// postsButton.innerText = 'post of current user';
//
// postsButton.classList.add('postsButton');
//
//
// postsButton.onclick = () => `{location.href =./post-details.html?data=${JSON.stringify(postItem)}}`;
// divUserDetails.appendChild(postsButton)




// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(post => posts.forEach(post => {
//         if (post.id === user.id) {
//
//         }
//     }))
