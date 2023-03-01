import { numberToCurrency } from "../helpers/numberToCurrency.js";

export const printProductsCart = (products) => {
    const contentCartProducts = document.querySelector(
        ".contentCart__products"
    );

    let html = "";

    for (const product in products) {
        const { amount, name, image, price, quantity, id } = products[product];
        const subtotal = amount * price;

        html += `
            <div class="product__card">
                <div class="product__card--img">
                    <img src="${image}" alt="imagen">
                </div>
                <div class="product__card--body">
                    <h4>${name}</h4>
                    <p>Stock: ${quantity} | <span>${numberToCurrency(
            price
        )}</span></p>
                    <p>Subtotal: ${numberToCurrency(subtotal)}</p>

                    <div class="product__card--action" id="${id}">
                        <i class="bx bx-minus"></i>
                        <span>${
                            amount === 1 ? "1 unit" : amount + " units"
                        }</span>
                        <i class="bx bx-plus"></i>
                        <i class="bx bx-trash-alt"></i>
                    </div>
                </div>
            </div>`;
    }

    contentCartProducts.innerHTML = html;
};
