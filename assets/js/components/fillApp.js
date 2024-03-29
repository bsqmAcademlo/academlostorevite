export const fillApp = () => {
	const app = document.querySelector("#app");

	let html = `
    <header id="headerPrincipal">
            <nav class="navbar container">
                <a href="#home" class="navbar_logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48" class="nav_logo-icon">
                        <title>Academlo Logo</title>
                        <g>
                            <g>
                                <path
                                    d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span>STORE</span>
                </a>

                <ul class="navbar_menu" id="navbarMenu">
                    <li>
                        <a class="link__active" href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                </ul>

                <div class="navbar__icons">
                    <i class='bx bx-moon' id="iconTheme"></i>
                    <i class='bx bx-shopping-bag' id="iconShowCart">
                        <div class="totalAmountProducts"><span>0</span></div>
                    </i>
                    <i class='bx bxs-dashboard handleIconNavbar'></i>
                </div>
            </nav>
        </header>

        <div class="container">
            <section class="home scrollPy" id="home">

                <div class="home_header">
                    <div></div>
                    <div class="home_header-img">
                        <img src="/images/sweater2.png" alt="">
                    </div>
                </div>

                <div class="home_body">
                    <h2 class="home_body-title">New Sweatshirt
                        COLLECTIONS 2024</h2>
                    <p class="home_body-paragragh">Latest arrival of the new Hanes Midweight Crewneck sweatshirt imported
                        from
                        the 2022 series, with
                        a modern design.</p>
                    <p class="home_body-price">$14.00</p>
                    <a href="#products" class="home_body-btn">Show more</a>
                </div>

            </section>

            <section class="content_products scrollPy" id="products">
                <div class="content_filter">
                    <div class="filter filter__active" data-filter="all">
                        <p>Show all</p>
                        <p>Show all products</p>
                    </div>

                    <div class="filter" data-filter=".shirt">
                        <p>Shirt</p>
                        <p>7 products</p>
                    </div>

                    <div class="filter" data-filter=".hoddie">
                        <p>Hoddie</p>
                        <p>6 products</p>
                    </div>

                    <div class="filter" data-filter=".sweater">
                        <p>Sweater</p>
                        <p>5 products</p>
                    </div>
                </div>

                <div class="products"></div>
            </section>
        </div>

        <div class="contentCart">
            <i class="bx bx-x" id="iconCloseCart"></i>
            <div class="contentCart__products"></div>
            <div class="contentCart__total">
                <div class="contentCart__total--buy">
                    <p class="numberItems">1 items</p>
                    <p class="totalPrice">$20.00</p>
                </div>

                <button class="btn__buy">Comprar</button>
            </div>
        </div>

        <div class="modalProduct"></div>

        <div class="load" id="load">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48" class="load__gif">
                <title>Academlo Logo</title>
                <g>
                    <g>
                        <path
                            d="M24.45,56.48,0,42.36V14.12L24.46,0,48.92,14.12V42.36ZM1.89,41.26l22.56,13L47,41.26v-26l-22.56-13-22.56,13Z">
                        </path>
                        <path
                            d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
                        </path>
                    </g>
                </g>
            </svg>
        </div>

        <footer>
            <section class="content_footer container">
                <div class="footer_info">
                    <h3 class="footer_info-title">Our information</h3>
                    <ul>
                        <li><a href="#">Toluca - México</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">About Us</h3>
                    <ul>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Copy Right</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">Product</h3>
                    <ul>
                        <li><a href="#">Hoodies</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Sweatshirts</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">Social</h3>
                    <ul class="footer_link-social">
                        <li>
                            <a href="#">
                                <i class='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxl-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxl-instagram'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <p><b>Nombre completo, correo y <a href="#">repositorio</a> de la persona que lo realizo</b></p>
            <p>
                Puedes utilizar esta 👉🏽 <a href="https://services-academlo-shopping.onrender.com/" target="_blank">click</a>,
                o si tienes problemas con esa, utiliza esta 👉🏽 <a href="https://ecommercebackend.fundamentos-29.repl.co" target="_blank">click</a>
            </p>
        </footer>
    `;

	app.innerHTML = html;
};
