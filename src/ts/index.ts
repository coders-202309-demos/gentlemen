import App from "./components/App/App.js";
import { type ApiGentleman, type Gentleman } from "./types.js";

const urlApi = "http://localhost:3001/gentlemen/";

const appElement = document.querySelector(".app")!;

const response = await fetch(urlApi);
const gentlemen = (await response.json()) as ApiGentleman[];

const app = new App(
  appElement,
  gentlemen.map<Gentleman>((gentleman) => ({
    ...gentleman,
    isSelected: gentleman.selected,
  }))
);
app.render();
