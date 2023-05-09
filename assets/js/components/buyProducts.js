import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProducts } from "./printProducts.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const buyProducts = (db) => {
    let btnBuy = document.querySelector(".btn__buy");

    if (btnBuy)
        btnBuy.addEventListener("click", () => {
            if (!Object.values(db.cart).length)
                return alert("Que te parece si compras algo primero? jeje");

            const res = confirm("seguro que quieres hacer la compra? 😍");
            if (!res) return;

            db.products = db.products.map((product) => {
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
                JSON.stringify(db.products)
            );
            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );

            printProducts(db);
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);

            window.location.reload();
        });
};
