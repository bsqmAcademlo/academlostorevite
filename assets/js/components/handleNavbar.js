export const handleNavbar = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    const iconNavbar = document.querySelector(".handleIconNavbar");

    function closeAndOpen() {
        if (navbarMenu.classList.contains("navbar_menu-show")) {
            navbarMenu.classList.remove("navbar_menu-show");
            iconNavbar.classList.remove("bx-x");
            iconNavbar.classList.add("bxs-dashboard");
        } else {
            navbarMenu.classList.add("navbar_menu-show");
            iconNavbar.classList.add("bx-x");
            iconNavbar.classList.remove("bxs-dashboard");
        }
    }

    iconNavbar.addEventListener("click", () => {
        closeAndOpen();
    });

    navbarMenu.addEventListener("click", (e) => {
        closeAndOpen();
    });
};
