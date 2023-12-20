import React, { ComponentProps } from "react";
import NavBar from "@/Components//Links";

export default function Header() {
  // this component contains logo and bunch of links to refer other routing pages
  type links = string[];
  const routes: links = ["resume", "contact", "projects"];

  return (
    <header className="border border-white h-16 w-screen">
      <div className="logo w-9 border border-white">
        <h1 className="font-bold capitalize">pyropecs</h1>
      </div>

      <nav className="capitalize">
        <NavBar routeLinks={routes} />
      </nav>
    </header>
  );
}
