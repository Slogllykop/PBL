// Responsive navbar button
let navbar = document.querySelector('.header .flex .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    orders.classList.remove('active');
}


// User account toggle
let acc = document.querySelector('.user-account');
document.querySelector('#user-btn').onclick = () =>{
    acc.classList.add('active');
}
document.querySelector('#close-account').onclick = () =>{
    acc.classList.remove('active');
}


// My orders toggle
let orders = document.querySelector('.my-orders');
document.querySelector('#order-btn').onclick = () =>{
    orders.classList.add('active');
}
document.querySelector('#close-orders').onclick = () =>{
    orders.classList.remove('active');
}

// Shopping cart toggle
let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}
document.querySelector('#close-cart').onclick = () =>{
    cart.classList.remove('active');
}