const data = {
  "items": [
    {
      "name": "Janan Sports",
      "description": "A beautiful, long-lasting fragrance designed for active individuals who appreciate a fresh, sporty scent with a touch of elegance. Perfect for daily wear and energetic lifestyles.",
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
      "description": "A crisp, vibrant fragrance inspired by the refreshing breeze of English mornings. Sky Blue (England) blends cool citrus and aquatic notes with a hint of musk, making it perfect for confident, modern individuals.",
      "image": "images/sky-blue.png",
      "brand": "J. (Junaid Jamshed)",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "500 PKR" },
        { "quantity": "12ml", "price": "980 PKR" }
      ]
    },
    {
      "name": "Erba Pura",
      "description": "A luxurious and exotic unisex fragrance, Erba Pura opens with a burst of fresh citrus and sweet fruits, layered over a sensual base of white musk, amber, and vanilla. This captivating scent is both vibrant and smooth, leaving a long-lasting impression.",
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
      "name": "Elixir",
      "description": "A bold and enchanting fragrance crafted for those who command attention. Elixir features a rich blend of spicy, woody, and oriental notes, offering a deep, masculine scent with remarkable longevity and projection. Ideal for evening wear and special occasions.",
      "image": "images/elixir.png",
      "brand": "J. (Junaid Jamshed)",
      "available": true,
      "show_price": true,
      "prices": [
        { "quantity": "6ml", "price": "750 PKR" },
        { "quantity": "12ml", "price": "1,400 PKR" }
      ]
    },
    {
      "name": "Mukhallat Al Badar",
      "description": "A classic oriental fragrance blending rich oud, warm amber, and floral notes, Mukhallat Al Badar exudes traditional elegance and timeless charm. Its deep, resinous aroma lingers gracefully, making it a perfect choice for those who appreciate heritage and sophistication.",
      "image": "images/mukhallat-al-badar.png",
      "brand": "Al Haramain",
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

function renderPrices(prices) {
  let html = '<div class="price-list">';
  prices.forEach(p => {
    html += `<div>${p.quantity} - ${p.price}</div>`;
  });
  html += '</div>';
  return html;
}
