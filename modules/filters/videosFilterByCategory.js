export function videosFilterByCategory() {
  const checkedCategories = [];
  document
    .querySelectorAll(".category-checkbox:checked")
    .forEach((checkbox) => {
      checkedCategories.push(checkbox.value.toLowerCase());
    });

  const videoCards = document.querySelectorAll(".card");

  videoCards.forEach((card) => {
    const cardCategory = card.dataset.category.toLowerCase();
    const displayCard =
      checkedCategories.includes(cardCategory) ||
      checkedCategories.length === 0;

    card.style.display = displayCard ? "block" : "none";
  });
}
