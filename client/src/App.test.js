import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import {
  toHaveStyle,
  toHaveClass,
  toBeInTheDocument
} from "@testing-library/jest-dom";
import App from "./App";

describe("Running a test suite on App component", () => {
  expect.extend({ toHaveStyle, toHaveClass, toBeInTheDocument });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Checks that App renders", () => {
    rtl.render(<App />);
  });
  it("Checks that Button renders blue background", () => {
    const { getByTestId } = rtl.render(<App />);
    const button = getByTestId("toggleButton");
    rtl.fireEvent.click(button);
    rtl.fireEvent.click(button);
    expect(getByTestId("background")).toHaveClass("blue");
  });
  it("Checks that Player list title exists", () => {
    const { getByText } = rtl.render(<App />);
    expect(getByText("Player List")).toBeInTheDocument();
  });
});
