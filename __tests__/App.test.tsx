import { App } from "../src/App";
import { screen, render } from "@testing-library/react";

describe("Hermes digital react test front", () => {
  it("display correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Hermes Digital");
  });
});
