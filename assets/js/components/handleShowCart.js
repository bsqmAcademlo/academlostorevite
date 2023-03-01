export const handleShowCart = () => {
    const iconCloseCart = document.querySelector("#iconCloseCart");
    const iconShowCart = document.querySelector("#iconShowCart");

    const contentCart = document.querySelector(".contentCart");

    iconCloseCart.addEventListener("click", () => {
        contentCart.classList.remove("contentCart_show");
    });

    iconShowCart.addEventListener("click", () => {
        contentCart.classList.add("contentCart_show");
    });
};
