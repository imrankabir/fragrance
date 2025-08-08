const data = {
  "items": [
    {
      "name": "Janan Sports",
      "description": "A beautiful, long-lasting fragrance designed for active individuals...",
      "image": "images/janan-support.png",
      "brand": "J. (Junaid Jamshed)",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1,500 PKR" }
      ]
    },
    {
      "name": "Sky Blue (England)",
      "description": "A crisp, vibrant fragrance inspired by the refreshing breeze...",
      "image": "images/sky-blue.png",
      "brand": "J. (Junaid Jamshed)",
      "available": false,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1,300 PKR" }
      ]
    },
    {
      "name": "Erba Pura",
      "description": "A luxurious and exotic unisex fragrance...",
      "image": "images/erba-pura.png",
      "brand": "Xerjoff",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1,400 PKR" }
      ]
    },
    {
      "name": "Mukhallat Al Badar",
      "description": "A classic oriental fragrance blending rich oud...",
      "image": "images/mukhallat-al-badar.png",
      "brand": "Al Haramain",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "850 PKR" },
        { "quantity": "12ml", "price": "1,600 PKR" }
      ]
    }
  ]
};

renderProducts(data.items);

function renderProducts(items) {
  const container = document.querySelector("#products");
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
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
