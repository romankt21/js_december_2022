let url = new URL(location.href);
let json = url.searchParams.get('data');
let post = JSON.parse(json);
console.log(post);

let divUserDetails = document.createElement('div');
document.body.appendChild(divUserDetails);
divUserDetails.innerText = `${JSON.stringify(post)}`

let divUD = document.createElement('div');
document.body.appendChild(divUD);
divUD.innerText = `${json}`