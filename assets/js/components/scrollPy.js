export const scrollSpy = () => {
    {
        // const links = document.querySelectorAll(".navbar_menu a");
        // const headers = document.querySelectorAll("body .scrollPy");
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 const id = "#" + entry.target.id;
        //                 links.forEach((link) => {
        //                     link.classList.remove("link__active");
        //                     const href = link.attributes.href.value;
        //                     if (href === id) {
        //                         link.classList.add("link__active");
        //                     }
        //                 });
        //             }
        //         });
        //     },
        //     {
        //         threshold: 0.2,
        //     }
        // );
        // headers.forEach((header) => observer.observe(header));
    }

    const sections = document.querySelectorAll("body .scrollPy");

    function fn() {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector(".navbar_menu li a[href*=" + sectionId + "]")
                    .classList.add("link__active");
            } else {
                document
                    .querySelector(".navbar_menu li a[href*=" + sectionId + "]")
                    .classList.remove("link__active");
            }
        });
    }

    window.addEventListener("scroll", fn);
};
