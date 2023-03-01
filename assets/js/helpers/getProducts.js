export async function getProducts() {
    const data = await fetch(
        "https://ecommercebackend.fundamentos-29.repl.co/"
    );

    const response = await data.json();

    localStorage.setItem("productsApi", JSON.stringify(response));
    return response;
}
