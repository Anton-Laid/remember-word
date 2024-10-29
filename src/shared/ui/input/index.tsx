import React from "react";
import styles from "./styles.module.css";

interface InputProps {
  lang: "rus" | "eng";
  className?: string;
  placeholder: string;
  typeInput: "text" | "number";
  onChange: (lang: "rus" | "eng", value: string) => void;
  value: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className={styles.input}
      onChange={(e) => props.onChange(props.lang, e.target.value)}
      value={props.value || ""}
      placeholder={props.placeholder}
      type={props.typeInput}
    />
  );
};
