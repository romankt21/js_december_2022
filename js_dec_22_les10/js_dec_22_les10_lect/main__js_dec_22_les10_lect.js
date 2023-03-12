// // input
// console.log(document.forms);
// console.log(document.forms[0])
// console.log(document.forms.f1)
// console.log(document.forms[0].username.value)
// console.log(document.forms.f1.send.disabled);


// // events
// let target = document.querySelector('.target');
// target.onclick = function () {
//     console.log('click done')
// }


//   // storage

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    let title = document.createElement('h2');
    title.innerText = `${product.title} ${product.price}`;

    let image = document.createElement('img');
    image.src = product.image

    let button = document.createElement('button');
    button.innerText = 'save'
    button.onclick = function () {
        let cartArray = JSON.parse(localStorage.getItem('cart') )|| [];


        cartArray.push(product)
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }

    productDiv.append(title, image, button)


    document.body.appendChild(productDiv);

}