import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const handleCart = (db) => {
    const productsHTML = document.querySelector(".products");
    const contentCartProducts = document.querySelector(
        ".contentCart__products"
    );

    productsHTML.addEventListener("click", (e) => {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.id);
            const productFind = db.products.find(
                (product) => product.id === id
            );

            if (db.cart[productFind.id]) {
                if (db.cart[productFind.id].amount === productFind.quantity)
                    return alert("No tenemos mas en stock");
                db.cart[productFind.id].amount++;
            } else {
                db.cart[productFind.id] = { ...productFind, amount: 1 };
            }

            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);
        }
    });

    contentCartProducts.addEventListener("click", (e) => {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.parentElement.id);
            const productFind = db.products.find(
                (product) => product.id === id
            );

            if (db.cart[productFind.id].amount === productFind.quantity)
                return alert("No tenemos mas en stock");

            db.cart[id].amount++;

            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);
        }

        if (e.target.classList.contains("bx-minus")) {
            const id = Number(e.target.parentElement.id);

            if (db.cart[id].amount === 1) {
                const res = confirm("Seguro lo quieres eliminar 😫");
                if (!res) return;
                delete db.cart[id];
            } else {
                db.cart[id].amount--;
            }

            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);
        }

        if (e.target.classList.contains("bx-trash-alt")) {
            const res = confirm("Seguro lo quieres eliminar 😫");
            if (!res) return;

            const id = Number(e.target.parentElement.id);
            delete db.cart[id];

            window.localStorage.setItem(
                "cartProducts",
                JSON.stringify(db.cart)
            );
            printProductsCart(db);
            printTotal(db);
            printAmountProductsInCart(db);
        }
    });
};
