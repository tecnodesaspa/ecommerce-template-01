const cart = document.getElementById("cart");
const overlay = document.getElementById("overlay");
const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const titleShoppingCart = document.getElementById('titleShoppingCart')

document.addEventListener('DOMContentLoaded', (ev) => {
    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    if(products.length == 0){
        document.getElementById('shoppingCart').style.display = 'none'
    } else {
        document.getElementById('shoppingCart').innerText = products.length
    }
})

/**
 * @idQuant = Id de input con cantidad de producto
 * @product = {name: string, desc: string, price: string}
 * */
function addToCart(idQuant, product){
    const quant = parseFloat(document.getElementById(idQuant).value)
    if(quant <= 0){
        alert('Debe ingresar al menos un producto')
        return
    }

    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    for (let index = 0; index < quant; index++) {
        products.push(product)
    }
    localStorage.setItem('products', JSON.stringify(products))
    alert('Producto agregado')
    document.getElementById(idQuant).value = 0
    document.getElementById('shoppingCart').innerText = products.length
}

function goToCategory(){
    window.location.href = '/ecommerce-template-01/categoria.html'
}

function goToDetail(){
    window.location.href = '/ecommerce-template-01/detalle.html'
}

function goToShoppingCart(){
    window.location.href = '/ecommerce-template-01/carrito.html'
}

function goToFinish(){
    window.location.href = '/ecommerce-template-01/finalizar.html'
}

function openShoppingCart() {
    cart.classList.add("active");
    overlay.classList.add("active");
    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    titleShoppingCart.innerText = `Tu carrito (${products.length} articulo)`
}

function closeShoppingCart() {
    cart.classList.remove("active");
    overlay.classList.remove("active");
}

openCart.addEventListener("click", openShoppingCart);
closeCart.addEventListener("click", closeShoppingCart);
overlay.addEventListener("click", closeShoppingCart);
