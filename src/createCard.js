function createCard(data) {
	let html = `
  <!-- CARD EXAMPLE -->
  <div class="card">
      <div class="card-header">
        <div class="card-img" style="background-image:url('${data.img}') "></div>
      </div>
    <div class="card-body">
      <h2 class="card-title">${data.name}</h2>
      <p class="card-description">${data.desc}</p>
    <button class="card-button">I want it!</button>
    </div>
  </div>
<!-- END OF THE CARD EXAMPLE -->`;

	return html;
}

function displayHTML(houses) {
	let html = "";
	houses.forEach((house) => {
		html += createCard(house);
	});
	return html;
}

export default displayHTML;
