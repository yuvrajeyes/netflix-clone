let browse = document.getElementById("browse");
// browse.classList.add("low-opacity");
// console.log(browse);
let closeCard = document.querySelector(".closeicon");
let showCard = document.querySelectorAll(".drama-item");

closeCard.addEventListener("click", closeItem);
showCard.forEach((card) => {
  card.addEventListener("click", showItem);
});

function closeItem(e) {
  // Grab the parent element from DOM
  let parent = this.parentElement.parentElement;
  // Add closecard class
  parent.classList.remove("show-card");
}

function showItem(e) {
  // Grab the item from DOM
  let selectedItem = document.querySelector(`.${this.id}-selected`);
  // Add show-card class
  selectedItem.classList.add("show-card");
}
