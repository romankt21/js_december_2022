let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
console.log(user);

let divUserDetails = document.createElement('div');
document.body.appendChild(divUserDetails);
divUserDetails.innerText = `${json}`

let button = document.createElement('button');
button.innerText = 'posts';

button.onclick = () => `{location.href =./post-details.html?data=${JSON.stringify(postItem)}}`;
divUserDetails.appendChild(button)

