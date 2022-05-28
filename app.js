const main = document.querySelector(".main");
const API_KEY = "6b736567-86e18fca-5c33feb2-4973a26f";
const API_URL = "https://fortniteapi.io/v2/shop?lang=en";

async function getData() {
  let fetchData = await fetch(API_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  });
  let jsonData = fetchData.json();
  jsonData.then((mal) => createProducts(mal.shop));
}

getData();

function createProducts(data) {
  console.log(data);

  data.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                            <img src="${item.displayAssets[0].background}" alt="">
                            <div class="card_body">
                                <h3>Name: ${item.displayName}</h3>
                                <h3>Type: ${item.displayType}</h3>
                                <h2>Summa: $${item.price.finalPrice}</h2>
                            </div>
        `;
    main.appendChild(card);
  });
}

console.log("https://fortniteapi.io/v2/battlepass?lang=en&season=current");
