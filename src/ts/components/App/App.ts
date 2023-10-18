import { type Gentleman } from "../../types.js";
import Button from "../Button/Button.js";
import Component from "../Component/Component.js";
import Counter from "../Counter/Counter.js";
import GentlemenList from "../GentlemenList/GentlemenList.js";

class App extends Component {
  constructor(parentElement: Element, private gentlemen: Gentleman[]) {
    super(parentElement, "div", "container");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section class="controls"></section>
      <main class="main"></main>
    `;

    const section = this.element.querySelector(".controls")!;

    const counter = new Counter(section, 0);
    counter.render();

    const button = new Button(
      section,
      "select",
      "Marcar todos",
      this.selectAllGentlemen
    );
    button.render();

    const main = this.element.querySelector(".main")!;

    const gentlemenList = new GentlemenList(main, this.gentlemen);
    gentlemenList.render();
  }

  private readonly selectAllGentlemen = () => {
    const allSelectedGentlemen = this.gentlemen.map((gentleman) => ({
      ...gentleman,
      isSelected: true,
    }));

    this.gentlemen = allSelectedGentlemen;

    this.render();
  };
}

export default App;
