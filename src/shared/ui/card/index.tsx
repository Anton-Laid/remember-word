import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  label: string;
  img: string;
  routing: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(props.routing);
  };

  return (
    <article className={styles.card} onClick={handelClick}>
      <img className={styles.img} src={props.img} alt="photo" />
      {props.label}
    </article>
  );
};
