import { numberToCurrency } from "../helpers/numberToCurrency.js";
import { printAmountProductsInCart } from "./printAmountProductsInCart.js";
import { printProductsCart } from "./printProductsCart.js";
import { printTotal } from "./printTotal.js";

export const modalProduct = (db) => {
    const modalProduct = document.querySelector(".modalProduct");
    const productHTTML = document.querySelector(".products");

    productHTTML.addEventListener("click", (e) => {
        if (e.target.classList.contains("showModalProduct")) {
            const id = Number(e.target.id);
            const products = JSON.parse(
                window.localStorage.getItem("productsApi")
            );

            const productFind = products.find((product) => product.id === id);

            const addCart =
                productFind.quantity !== 0
                    ? `<i class="bx bx-plus" id="${productFind.id}"></i>`
                    : "<span class='product__soldout'>Sold out</span>";

            modalProduct.innerHTML = `
            <div class="contentProduct">
                <i class="bx bxs-x-circle closeModal"></i>
                <div class="contentProduct__img">
                    <img src="${productFind.image}" alt="">
                </div>
                <h3 class="contentProduct__name">${productFind.name} - <span>${
                productFind.category
            }</span></h3>
                <p class="contentProduct__p">${productFind.description}</p>

                <div class="contentProduct__info">
                    <h3>${numberToCurrency(productFind.price)} ${addCart}</h3>

                    <p>stock: ${productFind.quantity}</p>
                </div>
            </div>
        `;

            modalProduct.classList.add("modalProduct__show");

            const closeModal = document.querySelector(".closeModal");
            const iconAdd = document.querySelector(
                ".contentProduct__info .bx-plus"
            );

            closeModal.addEventListener("click", () => {
                modalProduct.classList.remove("modalProduct__show");
            });

            if (iconAdd)
                iconAdd.addEventListener("click", () => {
                    if (db.cart[productFind.id]) {
                        if (
                            db.cart[productFind.id].amount ===
                            productFind.quantity
                        )
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
                    printAmountProductsInCart(db);
                    printTotal(db);
                });
        }
    });
};
