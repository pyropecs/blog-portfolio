/**
 * @jest-environment jsdom
 */

import Header from "@/Components/Header";
import { render, screen } from "@testing-library/react";
type links = string[];
const navLinks: links = ["resume", "contact", "projects"];
test("screen debug of header component", () => {
  render(<Header navLinks={navLinks} />);

  screen.debug();
});
