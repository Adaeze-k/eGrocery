var cart_btn = document.querySelector('.cart-btn');
var cart_sidebar = document.querySelector('.cart-sidebar');
var close_icon = document.querySelector('.close_icon');

cart_btn.onclick = function(){
    cart_sidebar.style.right = "0";
}

close_icon.onclick = function(){
    cart_sidebar.style.right = "-600px";
}

var data=0;
document.getElementsByClassName("root").innerText=data;
function decrement(){
    data=data-1;
    document.getElementsByClassName("root").innerText=data;
}
function increment(){
    data=data+1;
    document.getElementsByClassName("root").innerText=data;
}