import { videosFilterByCategory } from "../../modules/filters/videosFilterByCategory.js";

class CategoryCheckbox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="checkbox">
        </div>
      `;
    this.fetchCategories();
  }

  fetchCategories() {
    fetch("./videos.json")
      .then((response) => response.json())
      .then((data) => {
        this.displayCategories(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors du chargement des catégories : ",
          error
        );
      });
  }

  displayCategories(data) {
    const categoryContainer = this.querySelector(".checkbox");
    const currentCategories = [];

    data.forEach((video) => {
      if (!currentCategories.includes(video.category.name)) {
        currentCategories.push(video.category.name);
      }
    });

    currentCategories.forEach((category) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("category-checkbox");
      checkbox.id = category.toLowerCase();
      checkbox.value = category;
      checkbox.addEventListener("change", videosFilterByCategory.bind(this));

      const label = document.createElement("label");
      label.htmlFor = category.toLowerCase();
      label.textContent = category;

      categoryContainer.appendChild(checkbox);
      categoryContainer.appendChild(label);
    });
  }
}

customElements.define("category-checkbox", CategoryCheckbox);
