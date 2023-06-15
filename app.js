let minicart_btn = document.getElementById('minicart-btn');
var minicart = document.querySelector("#minicart-id");
var product_cart = document.querySelectorAll('.cart');
var close_btn = document.getElementById('close-btn');
var total_item = document.getElementById("number-id").innerHTML;
var product = document.querySelector(".box");
var item_details_id = document.querySelectorAll("#item-details-id");
function open_minicart() {
    minicart.classList.toggle("d-block");
}
function add_to_cart(e) {
    document.getElementById('number-id').innerHTML = ++total_item;
    minicart.classList.add("d-block");
    item_details_id[item_details_id.length - 1 ].insertAdjacentHTML("afterend",product.innerHTML);
    setTimeout((e) => {
        minicart.classList.remove("d-block");
    }, 5000);
}
function click_cart(item , index) {
    product_cart[index].addEventListener("click",add_to_cart)
}
function close_modal() {
   item_details_id.foreach((item , index) => { item_details_id[index].classList.add('d-block');
});
}
minicart_btn.addEventListener("click",open_minicart);
product_cart.forEach(click_cart);
close_btn.addEventListener("click", close_modal);
