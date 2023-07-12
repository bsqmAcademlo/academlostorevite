const BASE_URL = "https://services-academlo-shopping.onrender.com/";

export async function getProducts() {
	const data = await fetch(BASE_URL);

	const response = await data.json();

	localStorage.setItem("productsApi", JSON.stringify(response));
	return response;
}
