/**
 * J'importe ici tout les éléments dont j'ai besoins
 * qui sont dans des fichiers exterieurs
 */
import createCard from "./createCard";
import houseToRent from "./houseToRent";

/**
 * Ici, je récupère depuis le DOM les éléments
 * que je vais utiliser dans la manipulation des cartes.
 */
// Ici la classes cards qui sert à mettre toutes mes cartes
const cards = document.querySelector(".cards");
// typeHouse qui est le selecteur avec la liste déroulante
const typeHouse = document.querySelector(".select");
// isAvailable qui est le toggle (cocher/decocher) pour savoir si une maison
// est disponible ou non.
const isAvailable = document.querySelector(".available-checkbox");

/**
 * La fonction displayHTML(param)
 * sert à afficher dans le DOM toutes les cartes qui corresponde eventuellement
 * à un critère. On aurai pu aussi l'appeler render(param)
 *
 * 🤓 cette méthode a peut être sa place dans createCard.js
 *
 */
function displayHTML(houses) {
	let html = "";
	// Ici, je boucle sur le tableau houses pour créer chaque card.
	for (let i = 0; i < houses.length; i++) {
		// elles sont toutes indépendantes (c'est du à la fonction createCard())
		// C'est grâce à cette méthode qu'elles se rassembles pour être affiché à la fin.
		html += createCard(houses[i]);
	}

	// je retourne mon html pour lesquelles toutes mes maisons sont enregistré
	return html;
}

// Ici, nous avons récuperer la liste déroulante
// Nous ajoutons une ecouteur d'évenement qui permet de lancer une action
// si cet evenement venez à se produire.
// doc: https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// Nous allons utiliser une fonction fléchée
// doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions
typeHouse.addEventListener("change", () => {
	// Je créer une variable, housesFilter qui sera un nouveau tableau
	// pour lesquel on aura filtrer le contenu
	// doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	let housesFilter = houseToRent.filter((house) => {
		// la condition est la suivante :
		// Si le type de ma maison === au type de maison qu'a choisi le user alors tu passes dans housesFilter, sinon, je te filtre.
		return house.type === typeHouse.value;
	});
	// si la valeur est All
	if (typeHouse.value === "All") {
		// Mon filtre vaut mon fichier houseToRent
		housesFilter = houseToRent;
	}
	// et je display cet élément dans mon HTML grâce à la fonction displayHTML
	cards.innerHTML = displayHTML(housesFilter);
});

// comme au dessus, nous allons sur isAvailable, ajouter un écouteur d'evenement
// Nous allons aussi voir la fonction normal (alors qu'au dessus, c'est une fonction fléchée)
isAvailable.addEventListener("click", function (event) {
	let housesFilter;
	// Ici, event.target.checked vaut soit "true" soit "false".
	// Mais pour une compréhension général, je note quand même
	// la condition === true alors qu'on peut s'en passer.
	if (event.target.checked === true) {
		// Si c'est truen alors je filtre mon tableau de maison avec que
		// des maison disponibles
		housesFilter = houseToRent.filter(function (house) {
			return house.available;
		});
	} else {
		// sinon, je retourne mon tableau de base
		housesFilter = houseToRent;
	}
	// j'affiche cet élément dans le dom
	cards.innerHTML = displayHTML(housesFilter);
});

// Par défaut, j'affiche mon tableau avec toutes les maisons.
cards.innerHTML = displayHTML(houseToRent);
