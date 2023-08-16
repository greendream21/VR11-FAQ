const cards = document.querySelectorAll(".tp-widget-review");
cards.forEach((card) => {
  card.querySelector(".read-more").addEventListener("click", (e) => {
    card.querySelector(".text").classList.add("showall", "selected-show-all");
    e.currentTarget.classList.add("read-more--hide", "read-more--show-all");
  });
});

document.querySelectorAll(".play_button_background").forEach((b) => {
  b.addEventListener("mouseover", (e) => {
    console.log(e);
  });
});
