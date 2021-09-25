let browse = document.getElementById("browse");
let vdo = document.querySelector("#video-container");
let plays = document.querySelectorAll(".play-btn");
let closeCard = document.querySelectorAll(".closeicon");
let showCard = document.querySelectorAll(".card-item");

// Initially hide the video
vdo.style.display = "none";

closeCard.forEach((card) => {
  card.addEventListener("click", closeItem);
});

showCard.forEach((card) => {
  card.addEventListener("click", showItem);
});

plays.forEach((play) => {
  play.addEventListener("click", playVideo);
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

function playVideo(e) {
  // blur whole page when video pop-up
  browse.classList.add("blur_2px");
  // show video
  vdo.style.display = "block";
}

window.onload = function () {
  document.ondblclick = function (e) {
    if (e.target.id !== "video-container") {
      // set video_container's display equal to none
      vdo.style.display = "none";
      // pause video
      vdo.children[0].pause();
      // set current time to zero
      vdo.children[0].currentTime = 0;
      // remove blur_2px class
      browse.classList.remove("blur_2px");
    }
  };
};

