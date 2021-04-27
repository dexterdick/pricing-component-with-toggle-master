const toggle = document.querySelector(".toggle__switch");
const btn = document.querySelector(".toggle__btn");
const cards = document.querySelector(".cards");

const monthy = 1;
const annually = 0;

const basic = {
  plan: "Basic",
  price: ["&dollar;199.99", "&dollar;19.99"],
  features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  cardClass: ["card"],
  planClass: ["plan"],
  priceClass: ["price"],
  btnClass: ["btn"],
};

const professional = {
  plan: "Professional",
  price: ["&dollar;249.99", "&dollar;24.99"],
  features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  cardClass: ["card", "card--special"],
  planClass: ["plan"],
  priceClass: ["price"],
  btnClass: ["btn", "btn--special"],
};

const master = {
  plan: "Master",
  price: ["&dollar;399.99", "&dollar;39.99"],
  features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  cardClass: ["card"],
  planClass: ["plan"],
  priceClass: ["price"],
  btnClass: ["btn"],
};
const cardData = [basic, professional, master];

cardData.forEach((card) => {
  // create html EL
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const ul = document.createElement("ul");
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("learn more"));

  // add class
  article.classList.add(...card.cardClass);
  h2.classList.add(...card.planClass);
  h3.classList.add(...card.priceClass);
  btn.classList.add(...card.btnClass);
  btn.setAttribute("aria-label", "plan button");

  ul.classList.add("features");
  // load data
  h2.innerHTML = card.plan;
  h3.innerHTML = card.price[annually];

  card.features.forEach((feature, i) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.classList.add("features__item");
    li.innerHTML = feature;
  });
  article.append(h2, h3, ul, btn);
  cards.appendChild(article);
});

toggle.addEventListener("click", function () {
  if (btn.classList.contains("monthly")) {
    changePrice("annually");
  } else {
    changePrice("monthly");
  }

  btn.classList.toggle("monthly");
});

function changePrice(plan) {
  const h3 = document.querySelectorAll("h3");
  cardData.forEach((card, i) => {
    if (plan === "annually") {
      h3[i].innerHTML = card.price[annually];
    } else if (plan === "monthly") {
      h3[i].innerHTML = card.price[monthy];
    }
  });
}
