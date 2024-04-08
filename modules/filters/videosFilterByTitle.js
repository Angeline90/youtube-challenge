function videosFilterByTitle() {
  const searchValue = document.querySelector("#search").value.toLowerCase();
  const videoCards = document.querySelectorAll(".card");

  for (let i = 0; i < videoCards.length; i++) {
    const title = videoCards[i].querySelector("h2").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      videoCards[i].style.display = "block";
    } else {
      videoCards[i].style.display = "none";
    }
  }
}
