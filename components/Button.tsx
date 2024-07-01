// components/Button.tsx
import React from "react";
import { IButtonProps } from "../types/ButtonProps";

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 rounded focus:outline-none transition duration-150 ease-in-out";
  const styles = {
    primary: `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`,
    secondary: `${baseStyle} bg-gray-500 text-white hover:bg-gray-600`,
    danger: `${baseStyle} bg-red-500 text-white hover:bg-red-600`,
  };

  const combinedClassName = `${styles[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
