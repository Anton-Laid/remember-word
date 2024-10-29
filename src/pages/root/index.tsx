import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Card } from "../../shared/ui/card";

export const Root = () => {
  const navigate = useNavigate();

  const handleOpenDictionary = () => {
    navigate("/");
  };
  return (
    <section className={styles.container}>
      <h1>Hi, Anton </h1>

      <Card img={""} label="Добавить слова" routing="/add-word" />
      <Card img={""} label="Повторить слова" routing="/hub-word" />
    </section>
  );
};
