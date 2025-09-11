import React from 'react'
import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, active }) => {
  return (
    <button
      className={`btn ${active ? "btn-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
