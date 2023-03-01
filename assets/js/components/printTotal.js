import { numberToCurrency } from "../helpers/numberToCurrency.js";
import { amountProductsInCart } from "../helpers/amountProductsInCart.js";

export const printTotal = (cart) => {
    const contentCartProducts = document.querySelector(
        ".contentCart__products"
    );
    const contentCartTotal = document.querySelector(".contentCart__total");
    let html = "";

    if (Object.values(cart).length) {
        const { amountTotal, priceTotal } = amountProductsInCart(cart);
        html += `<div class="contentCart__total--buy">
                    <p class="numberItems">${amountTotal} items</p>
                    <p class="totalPrice">${numberToCurrency(priceTotal)}</p>
                </div>

                <button class="btn__buy">Comprar</button>`;
        contentCartTotal.innerHTML = html;
    } else {
        html += `<div class="contentCart__img-empty">
                    <img src="/images/empty-cart.png" alt="empty cart">
                </div>`;
        contentCartProducts.innerHTML = html;
        contentCartTotal.innerHTML = `
        <div class="contentCart__message-empty">
            <h2>Y si compras algo? 🥺</h2>
            <a href="#products" class="firtsBuy">COMPRAR</a>
        </div>`;

        const firtsBuy = document.querySelector(".firtsBuy");

        const contentCart = document.querySelector(".contentCart");

        firtsBuy.addEventListener("click", () => {
            contentCart.classList.remove("contentCart_show");
        });
    }
};
