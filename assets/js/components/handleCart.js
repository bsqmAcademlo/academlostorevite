import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const handleCart = (products, cart) => {
    const productsHTML = document.querySelector(".products");
    const contentCartProducts = document.querySelector(
        ".contentCart__products"
    );

    productsHTML.addEventListener("click", (e) => {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.id);
            const productFind = products.find((product) => product.id === id);

            if (cart[productFind.id]) {
                if (cart[productFind.id].amount === productFind.quantity)
                    return alert("No tenemos mas en stock");
                cart[productFind.id].amount++;
            } else {
                cart[productFind.id] = { ...productFind, amount: 1 };
            }

            window.localStorage.setItem("cartProducts", JSON.stringify(cart));
            printProductsCart(cart);
            printTotal(cart);
            printAmountProductsInCart(cart);
        }
    });

    contentCartProducts.addEventListener("click", (e) => {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.parentElement.id);
            const productFind = products.find((product) => product.id === id);

            if (cart[productFind.id].amount === productFind.quantity)
                return alert("No tenemos mas en stock");

            cart[id].amount++;

            window.localStorage.setItem("cartProducts", JSON.stringify(cart));
            printProductsCart(cart);
            printTotal(cart);
            printAmountProductsInCart(cart);
        }

        if (e.target.classList.contains("bx-minus")) {
            const id = Number(e.target.parentElement.id);

            if (cart[id].amount === 1) {
                const res = confirm("Seguro lo quieres eliminar 😫");
                if (!res) return;
                delete cart[id];
            } else {
                cart[id].amount--;
            }

            window.localStorage.setItem("cartProducts", JSON.stringify(cart));
            printProductsCart(cart);
            printTotal(cart);
            printAmountProductsInCart(cart);
        }

        if (e.target.classList.contains("bx-trash-alt")) {
            const res = confirm("Seguro lo quieres eliminar 😫");
            if (!res) return;

            const id = Number(e.target.parentElement.id);
            delete cart[id];

            window.localStorage.setItem("cartProducts", JSON.stringify(cart));
            printProductsCart(cart);
            printTotal(cart);
            printAmountProductsInCart(cart);
        }
    });
};
