import React, { useState } from "react";
import { Input } from "../input";
import styles from "./styles.module.css";

interface Props {
  date: IDate;
  setDate: (element: IDate) => void;
}

interface IDate {
  eng: string;
  rus: string;
  id: number;
}

export const BoxInput: React.FC<Props> = (props) => {
  const [count, setCount] = useState<IDate>(props.date);

  const handelChange = (lang: "rus" | "eng", value: string) => {
    const result = { ...count, [lang]: value };
    setCount(result);
    props.setDate(result);
  };

  return (
    <div className={styles.box}>
      <Input
        lang="eng"
        placeholder="Eng"
        typeInput="text"
        onChange={handelChange}
        value={count.eng}
      />
      <Input
        lang="rus"
        placeholder="Rus"
        typeInput="text"
        onChange={handelChange}
        value={count.rus}
      />
    </div>
  );
};
