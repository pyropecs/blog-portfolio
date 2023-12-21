import React, { ComponentProps } from "react";
import NavBar from "@/Components/NavLinks";
type logoProps = {
  children: React.ReactNode;
};
type headerProps = {
  navLinks: {
    title: string;
    link: string;
  }[];
};

const Logo = ({ children }: logoProps) => {
  return <>{children}</>;
};

export default function Header({ navLinks }: headerProps) {
  // this component contains logo and bunch of links to refer other routing pages

  return (
    <header className=" flex justify-between h-16 w-screen">
      <Logo>
        <div className="logo w-24  flex items-center m-2">
          <h1 className="text-3xl capitalize p-3">pyropecs</h1>
        </div>
      </Logo>

      <nav className="capitalize flex justify-between items-center">
        <NavBar routeLinks={navLinks} />
      </nav>
    </header>
  );
}
