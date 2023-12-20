/**
 * @jest-environment jsdom
 */

import Header from "@/Components/Header";
import { render, screen } from "@testing-library/react";

test("screen debug of header component", () => {
  render(<Header />);

  expect(screen.getByText("contact")).toBeInTheDocument();
});
