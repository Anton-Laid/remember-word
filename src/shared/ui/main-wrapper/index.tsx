import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface MainWrapperProps {
  children?: ReactNode;
  extClassName?: string;
}

const MainWrapper: FC<MainWrapperProps> = ({ children, extClassName }) => {
  return <div className={cn(styles.wrapper, extClassName)}>{children}</div>;
};

export default MainWrapper;
