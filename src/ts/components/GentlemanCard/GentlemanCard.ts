import { type Gentleman } from "../../types.js";
import Component from "../Component/Component.js";

class GentlemanCard extends Component {
  constructor(parentElement: Element, private readonly gentleman: Gentleman) {
    super(parentElement, "article", "gentleman");
  }

  protected populate(): void {
    const { name, picture, profession, status, isSelected, twitter } =
      this.gentleman;

    const initial = name[0].toUpperCase();

    this.element.innerHTML = `
      <div class="gentleman__avatar-container ${isSelected ? "selected" : ""}">
        <img class="gentleman__avatar" src="img/${picture}" alt="${name} apuntándote con el dedo" />
        <span class="gentleman__initial">${initial}</span>
      </div>
      <div class="gentleman__data-container">
        <h2 class="gentleman__name">${name}</h2>
        <ul class="gentleman__data-list">
          <li class="gentleman__data">
            <span class="gentleman__data-label">Profesión:</span>
            ${profession}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Estado:</span> ${status}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Twitter:</span> ${twitter}
          </li>
        </ul>
      </div>
    `;
  }
}

export default GentlemanCard;
