const data = {
  "items": [
    {
      "name": "Janan Sports",
      "description": "beautiful fregrence",
      "image": "images/janan-support.png",
      "brand": "J.",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1,500 PKR" }
      ]
    },
    {
      "name": "Sky Blue",
      "description": "beautiful fregrence",
      "image": "images/sky-blue.png",
      "brand": "England",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "500 PKR" },
        { "quantity": "12ml", "price": "980 PKR" }
      ]
    },
    {
      "name": "ERBA PURA",
      "description": "beautiful fregrence",
      "image": "images/erba-pura.png",
      "brand": "England",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1,400 PKR" }
      ]
    },
    {
      "name": "ELIXIR",
      "description": "beautiful fregrence",
      "image": "images/elixir.png",
      "brand": "England",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1,400 PKR" }
      ]
    },
    {
      "name": "Mukhallat Al Badar",
      "description": "beautiful fregrence",
      "image": "images/mukhallat-al-badar.png",
      "brand": "England",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1,400 PKR" }
      ]
    },
  ]
};

const container = document.querySelector("#products");

data.items.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="product-details">
      <h2>${item.name}</h2>
      <p><strong>Brand:</strong> ${item.brand}</p>
      <p>${item.description}</p>
      ${item.show_price ? renderPrices(item.prices) : ""}
      <div class="availability ${item.available ? 'available' : 'coming'}">
        ${item.available ? 'Available' : 'Coming Soon'}
      </div>
    </div>
  `;

  container.appendChild(card);
});

function renderPrices(prices) {
  let html = '<div class="price-list">';
  prices.forEach(p => {
    html += `<div>${p.quantity} - ${p.price}</div>`;
  });
  html += '</div>';
  return html;
}
