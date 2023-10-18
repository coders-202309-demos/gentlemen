import { type Gentleman } from "../../types.js";
import Component from "../Component/Component.js";
import GentlemanCard from "../GentlemanCard/GentlemanCard.js";

class GentlemenList extends Component {
  constructor(parentElement: Element, private readonly gentlemen: Gentleman[]) {
    super(parentElement, "ul", "gentlemen");
  }

  protected populate(): void {
    this.gentlemen.forEach((gentleman) => {
      const listElement = document.createElement("li");
      this.element.appendChild(listElement);

      const gentlemanCard = new GentlemanCard(listElement, gentleman);
      gentlemanCard.render();
    });
  }
}

export default GentlemenList;
