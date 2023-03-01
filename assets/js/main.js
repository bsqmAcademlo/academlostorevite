import "../css/styles.css";

import { headerScroll } from "./components/headerScroll.js";
import { handleNavbar } from "./components/handleNavbar.js";
import { darkMode } from "./components/darkMode.js";
import { handleShowCart } from "./components/handleShowCart.js";
import { printProducts } from "./components/printProducts.js";
import { getProducts } from "./helpers/getProducts.js";
import { handleCart } from "./components/handleCart.js";
import { printProductsCart } from "./components/printProductsCart.js";
import { printTotal } from "./components/printTotal.js";
import { buyProducts } from "./components/buyProducts.js";
import { modalProduct } from "./components/modalProduct.js";
import { printAmountProductsInCart } from "./components/printAmountProductsInCart.js";
import { scrollSpy } from "./components/scrollPy.js";
import { load } from "./components/load.js";
import { fillApp } from "./components/fillApp.js";
import { handleFilterActive } from "./components/handleFilterActive";

window.addEventListener("load", function () {
    load();
});

(async () => {
    const products =
        JSON.parse(localStorage.getItem("productsApi")) ||
        (await getProducts());

    let cart = JSON.parse(localStorage.getItem("cartProducts")) || {};

    fillApp();
    handleFilterActive();
    printProducts(products);
    headerScroll();
    handleNavbar();
    darkMode();
    handleShowCart();
    handleCart(products, cart);
    printProductsCart(cart);
    printTotal(cart);
    buyProducts(cart, products);
    modalProduct(cart);
    printAmountProductsInCart(cart);
    scrollSpy();

    mixitup(".products", {
        selectors: {
            target: ".product",
        },
        animation: {
            duration: 300,
        },
    }).filter("all");
})();
