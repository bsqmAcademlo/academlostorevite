import { numberToCurrency } from "../helpers/numberToCurrency.js";

export const printProducts = (db) => {
    const productsHTML = document.querySelector(".products");
    let html = "";

    for (const { category, id, image, name, price, quantity } of db.products) {
        const alt = "imagen camisa " + name.split(" ").slice(-1) + id;

        const showQuantity =
            quantity === 0
                ? `<span class="product__soldout">Sold out</span>`
                : `<span class="product_info--stock">Stock: ${quantity}</span>`;

        const buttonAdd =
            quantity === 0 ? "" : `<i class="bx bx-plus" id='${id}'></i>`;

        html += `<div class="product ${category}">
                    <div class="product__img">
                        <img src="${image}" alt="${alt}">
                    </div>
                    <div class="product_info">
                        ${buttonAdd}
                        <h3>${numberToCurrency(price)} ${showQuantity}</h3>
                        <p class='showModalProduct' id="${id}">${name}</p>
                    </div>
                </div>`;
    }

    productsHTML.innerHTML = html;
};
