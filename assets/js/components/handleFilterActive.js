export const handleFilterActive = () => {
    const contentFilter = document.querySelectorAll(".content_filter .filter");

    contentFilter.forEach((filter) => {
        filter.addEventListener("click", (e) => {
            contentFilter.forEach((filter) =>
                filter.classList.remove("filter__active")
            );

            e.currentTarget.classList.add("filter__active");
        });
    });
};
