import { numberToCurrency } from "../helpers/numberToCurrency.js";
import { amountProductsInCart } from "../helpers/amountProductsInCart.js";

export const printTotal = (db) => {
    const numberItems = document.querySelector(".numberItems");
    const totalPrice = document.querySelector(".totalPrice");

    const { amountTotal, priceTotal } = amountProductsInCart(db.cart);
    numberItems.textContent =
        amountTotal === 1 ? "1 item" : amountTotal + " items";
    totalPrice.textContent = numberToCurrency(priceTotal);
};
