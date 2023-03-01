export const headerScroll = () => {
    const headerPrincipal = document.querySelector("#headerPrincipal");

    window.addEventListener("scroll", () => {
        window.scrollY > 100
            ? headerPrincipal.classList.add("header_show")
            : headerPrincipal.classList.remove("header_show");
    });
};
