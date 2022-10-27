/**
 * @jest-environment jsdom
 */

import { Footer } from "./Footer";
import React from "react";
import { render } from "@testing-library/react";

test("renders footer", () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/footer/i);
  expect(linkElement).toBeDefined();
});
