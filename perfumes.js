const perfumes = {
  "items": [
    {
      "name": "Elixir",
      "description": "A bold and enchanting fragrance crafted for those who command attention. Elixir features a rich blend of spicy, woody, and oriental notes, offering a deep, masculine scent with remarkable longevity and projection. Ideal for evening wear and special occasions.",
      "image": "images/elixir.png",
      "brand": "J. (Junaid Jamshed)",
      "available": false,
      "show_price": true,
      "prices": [
        { "quantity": "50ml", "price": "3,600 PKR" }
      ]
    }
  ]
};

renderProducts(perfumes.items);

function renderProducts(items) {
  const container = document.querySelector("#products");
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}?v=1" alt="${item.name}">
      <div class="product-details">
        <h2>${item.name}</h2>
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p>${item.description}</p>
        <div class="bottom-section">
          ${item.show_price ? renderPrices(item.prices) : ""}
          <div class="availability ${item.available ? 'available' : 'coming'}">
            ${item.available ? 'Available' : 'Coming Soon'}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPrices(prices) {
  return `<div class="price-list">
    ${prices.map(p => `<div>${p.quantity} - ${p.price}</div>`).join('')}
  </div>`;
}
