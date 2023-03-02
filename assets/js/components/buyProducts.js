import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProducts } from "./printProducts.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const buyProducts = (db, products) => {
    let btnBuy = document.querySelector(".btn__buy");

    if (btnBuy)
        btnBuy.addEventListener("click", () => {
            if (!Object.values(db.cart).length)
                return alert("Que te parece si compras algo primero? jeje");

            const res = confirm("seguro que quieres hacer la compra? 😍");
            if (!res) return;

            products = products.map((product) => {
                return db.cart[product.id]?.id === product.id
                    ? {
                          ...product,
                          quantity:
                              product.quantity - db.cart[product.id].amount,
                      }
                    : product;
            });

            db.cart = {};

            window.localStorage.setItem(
                "productsApi",
                JSON.stringify(products)
            );
            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );

            printProducts(products);
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);
        });
};
