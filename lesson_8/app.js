'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

let cart = {};
let cartTableTitles = ["Название товара", "Количество", "Цена за шт.", "Итого"];
let productsNumbers = 0;
let cartBlock = document.querySelector(".cart");
let buyButtons = document.querySelectorAll(".feature__buy");
let cartIcon = document.querySelector(".cartIcon");
document.querySelector(".productNumbers").innerText = productsNumbers;


fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

buyButtons.forEach(button => {
    button.addEventListener("click", getProductInfo);
})

function getProductInfo(event) {
    let product;
    if (event.path[0].querySelector("img") == null) {
        product = event.path[4].childNodes[3];
    } else {
        product = event.path[3].childNodes[3];
    }
    let productName = product.querySelector('.featuredName').innerText;
    let productPrice = product.querySelector('.featuredPrice').innerText ;
    productPrice = parseFloat(productPrice.split("$")[1]);
    updateCart(productName, productPrice);
    updateCartTable();
    productsNumbers ++;
    document.querySelector(".productNumbers").innerText = productsNumbers;

}

cartIcon.addEventListener("click", function() {
    updateCartTable();
    cartBlock.classList.toggle('hidden');
})


function updateCartTable() {
    console.log("key pressed")
    cartBlock.innerHTML = "";
    let cartTable = "<table><tr>";
    for (let title in cartTableTitles) {
        cartTable += `<th class="cartTableCol">${cartTableTitles[title]}</th>`;
    }
    cartTable += "</tr>";
    let totalSum = 0;
    if(Object.keys(cart).length != 0) {
        console.log(Object.keys(cart).length)
        for (let product in cart) {
            let price = cart[product].price;
            let number = cart[product].numbers;
            totalSum += price * number;
            cartTable += `<tr>
            <td class="cartTableCol">${product}</td>
            <td class="cartTableCol">${cart[product].numbers} шт.</td>
            <td class="cartTableCol">$${price.toFixed(2)}</td>
            <td class="cartTableCol">$${(price * number).toFixed(2)}</td>
            </tr>`;
        }
    }
    
    cartTable += `<td collspan="4" class="cartTotal"">Товаров в корзине на сумму: $${totalSum}</td>`;
    cartBlock.insertAdjacentHTML("afterbegin", cartTable);
    
}

function updateCart(product, price) {
    if (product in cart) {
        console.log("Product exist");
        cart[product].numbers += 1;
    } else {
        cart[product] = {"numbers": 1, "price": price};
        console.log("New product");
    }
    console.log(cart);
}