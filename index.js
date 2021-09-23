let addIcons = document.querySelectorAll(".faq .add-icon");
let faqAnswers = document.querySelectorAll(".faq .faq-answer");

// console.log(addIcons);

addIcons.forEach((icon) => {
  icon.addEventListener("click", selectItem);
});

function selectItem(e) {
  // Grab content item from DOM
  let faqAnswer = document.querySelector(`#${this.id}-content`);
  // Add show class
  faqAnswer.classList.add("faq-answer-show");
  // Remove add-icon
  this.classList.remove("add-icon");
  this.innerHTML = '<img src="images/icons/plus-lg.svg" alt="" />';
  this.classList.add("cross-icon");

  let crossIcons = document.querySelectorAll(".cross-icon");
  crossIcons.forEach((icon) => {
    icon.addEventListener("click", removeItem);
  });
}

function removeItem(e) {
  // Grab content item from DOM
  let faqAnswer = document.querySelector(`#${this.id}-content`);
  // Remove show class
  faqAnswer.classList.remove("faq-answer-show");

  this.classList.remove("cross-icon");
  this.innerHTML = '<img src="images/icons/plus-lg.svg" alt="" />';
  this.classList.add("add-icon");
}
