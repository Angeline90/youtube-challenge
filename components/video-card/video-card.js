import { formatDate } from "../../services/formats/formatDate.js";
import { formatNumberOfViews } from "../../services/formats/formatNumberOfViews.js";

class VideoCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <main>
        <section class="video-card-container" id="video-card-container"></section>
      </main>
    `;
    this.fetchVideos();
  }

  fetchVideos() {
    fetch("./videos.json")
      .then((response) => response.json())
      .then((data) => {
        this.displayVideos(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors du chargement des vidéos : ",
          error
        );
      });
  }

  displayVideos(data) {
    const videoCardContainer = this.querySelector("#video-card-container");
    for (let i = 0; i < data.length; i++) {
      const currentVideo = data[i];

      videoCardContainer.innerHTML += `
        <div class="card">
          <img src="${currentVideo.img}" alt="image miniaturisée de la vidéo">
          <h2>${currentVideo.title}</h2>
          <p>${formatNumberOfViews(
            currentVideo.views
          )} vues ¤ Il y a ${formatDate(currentVideo.date)}</p>
        </div>
      `;
    }
  }
}

customElements.define("video-card", VideoCard);
