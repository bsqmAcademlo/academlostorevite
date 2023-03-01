export const darkMode = () => {
    const iconTheme = document.querySelector("#iconTheme");

    function handleMode() {
        if (window.document.body.classList.contains("dark-theme")) {
            window.document.body.classList.remove("dark-theme");
            iconTheme.classList.remove("bx-sun");
            window.localStorage.removeItem("saveTheme");
        } else {
            window.document.body.classList.add("dark-theme");
            iconTheme.classList.add("bx-sun");
            window.localStorage.setItem("saveTheme", true);
        }
    }

    iconTheme.addEventListener("click", () => handleMode());

    let isSaveThemeInStorage = window.localStorage.getItem("saveTheme");
    if (isSaveThemeInStorage) {
        window.document.body.classList.add("dark-theme");
        iconTheme.classList.add("bx-sun");
    }
};
