import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProducts } from "./printProducts.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const buyProducts = (cart, products) => {
    let btnBuy = document.querySelector(".btn__buy");

    if (btnBuy)
        btnBuy.addEventListener("click", () => {
            const res = confirm("seguro que quieres hacer la compra? 😍");
            if (!res) return;

            products = products.map((product) => {
                return cart[product.id]?.id === product.id
                    ? {
                          ...product,
                          quantity: product.quantity - cart[product.id].amount,
                      }
                    : product;
            });

            cart = {};

            window.localStorage.setItem(
                "productsApi",
                JSON.stringify(products)
            );
            window.localStorage.setItem("cartProducts", JSON.stringify(cart));

            printProducts(products);
            printProductsCart(cart);
            printTotal(cart);
            printAmountProductsInCart(cart);

            confirm(
                "Mil gracias por tu compra, te esperamos de nuevo por aqui"
            );
            window.location.reload(); //! esto debo de cambiarlo
        });
};
