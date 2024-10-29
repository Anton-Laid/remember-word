import React from "react";

interface Props {
  className?: string;
  label: string;
  onClick: () => void;
  typeButton: "button" | "submit";
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.typeButton}
      onClick={props.onClick}
      className={props.className}
    >
      {props.label}
    </button>
  );
};
