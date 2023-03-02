import { amountProductsInCart } from "../helpers/amountProductsInCart.js";

export const printAmountProductsInCart = (db) => {
    const totalAmountProducts = document.querySelector(
        ".totalAmountProducts span"
    );
    const { amountTotal } = amountProductsInCart(db.cart);

    totalAmountProducts.textContent = amountTotal;
};
