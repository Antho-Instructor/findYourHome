// index.js

import displayHTML from "./createCard";
import houseToRent from "./houseToRent";

const CARDS = document.querySelector(".cards");
const typeHouse = document.querySelector("select");
const isAvailable = document.querySelector(".available-checkbox");
const search = document.querySelector(".search-input");

/** A quoi servent les variables ?
 * A avoir une copie avant de la modifier
 */
let houseFilter = houseToRent;
let houseAvailable = [];
let houseSearch = [];

/** Ici, on vérifie si le bouton est checked ou pas */
isAvailable.addEventListener("change", (e) => {
	if (e.target.checked) {
		houseAvailable = houseFilter.filter((house) => house.available);
	} else {
		houseAvailable = houseFilter;
	}
	CARDS.innerHTML = displayHTML(houseAvailable);
});

/** Ici, c'est si le un filtre sur le type de la maison est communiqué */
typeHouse.addEventListener("change", () => {
	houseFilter = houseToRent.filter((house) => house.type === typeHouse.value);
	if (typeHouse.value === "All") {
		houseFilter = houseToRent;
	}
	CARDS.innerHTML = displayHTML(houseFilter);
});

/** Ici, c'est pour la recherche avec mot clé */
search.addEventListener("keyup", () => {
	let searchValue = search.value.toLowerCase();
	houseSearch = houseFilter.filter((house) => {
		return house.name.toLowerCase().includes(searchValue);
	});
	CARDS.innerHTML = displayHTML(houseSearch);
});

CARDS.innerHTML = displayHTML(houseFilter);
