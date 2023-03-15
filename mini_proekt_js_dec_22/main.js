let usersArr = document.createElement('div');
usersArr.classList.add('users');
document.body.appendChild(usersArr);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => users.forEach(user => {
        let userItem = document.createElement('div')
        userItem.classList.add('user');
        let a = document.createElement('a');
        a.innerText = `${user.id} ${user.name}`;
        a.href = `./user-details.html?data=${JSON.stringify(user)}`;


        usersArr.appendChild(userItem)
            userItem.appendChild(a)


    }))



