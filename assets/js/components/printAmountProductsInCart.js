import { amountProductsInCart } from "../helpers/amountProductsInCart.js";

export const printAmountProductsInCart = (cart) => {
    const totalAmountProducts = document.querySelector(
        ".totalAmountProducts span"
    );
    const { amountTotal } = amountProductsInCart(cart);

    totalAmountProducts.textContent = amountTotal;
};
