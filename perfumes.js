// const perfumes = {
//   "items": [
//     {
//       "name": "Elixir",
//       "description": "A bold and enchanting fragrance crafted for those who command attention. Elixir features a rich blend of spicy, woody, and oriental notes, offering a deep, masculine scent with remarkable longevity and projection. Ideal for evening wear and special occasions.",
//       "image": "images/elixir.png",
//       "brand": "J. (Junaid Jamshed)",
//       "available": false,
//       "show_price": false,
//       "prices": [
//         { "quantity": "50ml", "price": "3,600 PKR" }
//       ]
//     }
//   ]
// };

const perfumes = {
  "items": [
    {
      "name": "مخلط العود الرصاصی (20ml)",
      "description": "مخلط العود الرصاصی ایک نہایت پریمیم، شاہانہ اور گہری عربی خوشبو ہے جس میں خالص عود، گرم عنبر، نرم مسک اور ووڈی نوٹس کا شاندار امتزاج شامل ہے۔ یہ خوشبو اپنی طاقتور، دیرپا اور پُراثر مہک کی وجہ سے خاص پہچان رکھتی ہے۔ اس کا ہر اسپرے وقار، نفاست اور عربی لگژری کا احساس دلاتا ہے۔ یہ پرفیوم خاص طور پر ان افراد کے لیے بہترین انتخاب ہے جو مضبوط، روایتی اور کلاسک عربی خوشبوؤں کو پسند کرتے ہیں۔ مخلط العود الرصاصی شادیوں، خاص تقریبات، رات کی محفلوں اور سرد موسم میں بہترین پرفارمنس دیتا ہے اور اپنی دلکش خوشبو سے دیر تک ماحول کو معطر رکھتا ہے۔",
      "image": "images/mukhalat-al-oud-rasasi.jpeg",
      "brand": "الرصاصی کمپنی",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "20ml", "price": "TBD" }
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
