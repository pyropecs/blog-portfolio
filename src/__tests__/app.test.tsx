/**
 * @jest-environment jsdom
 */

import React from "react";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
test("check the button element is rendered", () => {
  const text = "pyropecs";
  const element = <Home />;
  render(element);
  expect(screen.getByText(text)).toBeInTheDocument();
});
