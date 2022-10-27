/**
 * @jest-environment jsdom
 */

import { Header } from "./Header";
import React from "react";
import { render } from "@testing-library/react";

test("renders header", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Lerna/i);
  expect(linkElement).toBeDefined();
});
