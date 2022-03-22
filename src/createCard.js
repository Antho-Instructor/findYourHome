/**
 * Ici, nous allons nous passer de la création du html avec par exemple :
 * const newDiv = document.createElement("div");
 * etc.
 *
 * Nous allons utiliser la méthode ES6 avec les templates strings
 *
 * L'avantage ? Nous nous passons de la ligne vu dessus !
 *
 * Je sais grâce à mon index.js que je vais utiliser createCard pour créer une carte HTML
 * Donc, je vais passer en paramètre 'house'
 * House est un objet qui contient l'ensemble des informations necessaires
 * pour créer une carte comme il se doit.
 *
 * Ce n'est pas parce que je met de l'HTML que c'est pas une variable comme une autre.
 *
 * ici, la const html est de même niveau que celle la
 *
 * const legume = "choux"
 *
 * A la différence près, c'est qu'ici, je vais changer chaque information par les informations qui me sera transmit depuis index.js.
 *
 * ex : house.img / house.desc/ house.name
 *
 * Pour en savoir plus : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
 */

function createCard(house) {
	const html = `
	<!-- CARD EXAMPLE -->
    <div class="card">
        <div class="card-header">
          <div class="card-img" style="background-image:url('${house.img}') "></div>
        </div>
      <div class="card-body">
        <h2 class="card-title">${house.name}</h2>
        <p class="card-description">${house.desc}</p>
      <button class="card-button">I want it!</button>
      </div>
    </div>
  <!-- END OF THE CARD EXAMPLE -->`;

	return html;
}

export default createCard;
