
const products = [
    {name: "Judy Hopps Plush", price: 450, image: "media/img/judy-plush.jpg"},
    {name: "Nick Wilde Plush", price: 480, image: "media/img/nick-plush.jpg"},
    {name: "Zootopia Mug", price: 220, image: "media/img/zootopia-mug.jpg"},
    {name: "Police Badge", price: 180, image: "media/img/police-badge.jpg"},
    {name: "Judy Notebook", price: 120, image: "media/img/judy-notebook.jpg"},
    {name: "Nick Cap", price: 250, image: "media/img/nick-cap.jpg"},
    {name: "Zootopia Tote Bag", price: 190, image: "media/img/tote-bag.jpg"},
    {name: "Sticker Pack", price: 90, image: "media/img/sticker-pack.jpg"},
    {name: "Judy Keychain", price: 85, image: "media/img/judy-keychain.jpg"},
    {name: "Water Bottle", price: 280, image: "media/img/water-bottle.jpg"},
    {name: "Zootopia Poster", price: 150, image: "media/img/zootopia-poster.jpg"},
    {name: "Phone Case", price: 300, image: "media/img/phone-case.jpg"}
];

let cart = [];

const container = document.getElementById("product-container");

products.forEach((product, index) => {

    container.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

            <div class="card product-card">

                <div class="product-image-box">

                    <span class="product-tag">
                        ZOOTOPIA
                    </span>

                    <img src="${product.image}"
                         alt="${product.name}"
                         class="product-img"
                         onerror="this.alt='Product image unavailable';">

                </div>

                <div class="card-body">

                    <p class="product-category">
                        OFFICIAL COLLECTION
                    </p>

                    <h5 class="product-name">
                        ${product.name}
                    </h5>

                    <div class="product-bottom">

                        <span class="product-price">
                            ₱${product.price}
                        </span>

                    </div>

                    <button class="btn add-cart-btn"
                        onclick="addToCart(${index})">
                        + Add to Cart
                    </button>

                </div>

            </div>

        </div>
    `;
});

function addToCart(index) {

    cart.push(products[index]);

    document.getElementById("cart-count").innerText = cart.length;

    alert(products[index].name + " added to cart!");
}

function showCart() {

    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₱${item.price}
            </p>
        `;
    });

    document.getElementById("total").innerText = total;

    const modal = new bootstrap.Modal(
        document.getElementById("cartModal")
    );

    modal.show();
}

function clearCart() {

    cart = [];

    document.getElementById("cart-count").innerText = 0;

    document.getElementById("cart-items").innerHTML =
        "Your cart is empty.";

    document.getElementById("total").innerText = 0;
}
