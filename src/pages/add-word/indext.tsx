import { useState } from "react";
import styles from "./styles.module.css";
import { BoxInput } from "../../shared/ui/boxInput";
import { Button } from "../../shared/ui/button";

interface IDate {
  eng: string;
  rus: string;
  id: number;
}

export const AddWord = () => {
  const [date, setDate] = useState<IDate[]>(
    Array.from({ length: 5 }, () => ({
      rus: "",
      eng: "",
      id: Math.floor(Math.random() * 10000),
    }))
  );

  const handleAddCount = () => {
    setDate((element) => [
      ...element,
      {
        rus: "",
        eng: "",
        id: Math.floor(Math.random() * 10000),
      },
    ]);
  };
  console.log(date);

  const handleSetDate = (element: IDate) => {
    setDate((elements) =>
      elements.map((item) => (item.id === element.id ? element : item))
    );
  };

  return (
    <form className={styles.container}>
      {date.map((i) => (
        <BoxInput date={{ ...i }} key={i.id} setDate={handleSetDate} />
      ))}
      <Button typeButton="button" label="add word" onClick={handleAddCount} />
    </form>
  );
};
