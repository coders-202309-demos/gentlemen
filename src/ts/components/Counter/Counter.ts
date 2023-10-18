import Component from "../Component/Component.js";

class Counter extends Component {
  constructor(
    parentElement: Element,
    private readonly totalSelectedGentlemen: number
  ) {
    super(parentElement, "p", "info");
  }

  protected populate(): void {
    this.element.textContent = `${this.totalSelectedGentlemen} señor${
      this.totalSelectedGentlemen === 1 ? "" : "es"
    } que te apuntan con el dedo marcados`;
  }
}

export default Counter;
