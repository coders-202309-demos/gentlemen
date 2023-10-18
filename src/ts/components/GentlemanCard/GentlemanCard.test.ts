import { type Gentleman } from "../../types";
import GentlemanCard from "./GentlemanCard";

describe("Given a GentlemanCard component", () => {
  describe("When it receives Ivan Eagler's data", () => {
    test("Then it should show 'Ivan Eagler' inside a heading", () => {
      const container = document.createElement("div");

      const ivan: Gentleman = {
        id: 1,
        name: "Ivan Eagler",
        isSelected: false,
        picture: "",
        profession: "",
        status: "",
        twitter: "",
      };

      const card = new GentlemanCard(container, ivan);
      card.render();

      const heading = container.querySelector("h2")!;

      expect(heading).not.toBeNull();
      expect(heading.textContent).toBe(ivan.name);
    });
  });
});
