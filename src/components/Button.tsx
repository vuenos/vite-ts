import React from "react";

interface ButtonsProps {
  children?: React.ReactNode;
  width: number;
  onClick?: () => void;
}

const Button: React.FC<ButtonsProps> = (props) => {
  //React.FC(react의 함수형 컴포넌트)
  const { width, children, onClick } = props;
  return (
    <button
      style={{
        width: `${width}px`,
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;