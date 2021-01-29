import React from "react";
import { render, screen } from "@testing-library/react";
import Speedometer from "./speedometer";

it("show the component", () => {
  render(<Speedometer visible={true} draggable={true} />);
  expect(screen.getByTestId("Speedometer")).toBeTruthy();
});
