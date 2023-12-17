import React from "react";
type buttonProps = {
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  className: string;
};

export const Button = ({ children, buttonType, className }: buttonProps) => {
  return (
    <button type={buttonType} className={className}>
      {children}
    </button>
  );
};

export default Button;
