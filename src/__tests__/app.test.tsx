import React from "react";
import Home from "@/app/page";
import Button from "@/Components/Button";
import { render, screen } from "@testing-library/react";
test("check the button element is rendered", () => {
  const text = "click me";
  const element = <Home />;
  render(element);
  expect(screen.getByText(text)).toBeInTheDocument();
});
