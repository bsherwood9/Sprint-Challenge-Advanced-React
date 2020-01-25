import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerList from "./PlayerList";
import expectationResultFactory from "jest-jasmine2/build/expectationResultFactory";

it("renders without crashing", () => {
  rtl.render(<PlayerList />);
});
it("check that Title is rendering", () => {
  const wrap = rtl.render(<PlayerList />);
  const hasPlayers = wrap.getByTestId("title");
  expect(hasPlayers).toHaveTextContent("Player List");
});
// it("check that Name is rendering", () => {
//   const { getByText } = rtl.render(<PlayerList />);
//   const morgan = getByText("Alex Morgan");
//   expect(morgan).toBeVisible();
// });
