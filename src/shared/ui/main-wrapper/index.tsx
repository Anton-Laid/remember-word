import { FC, ReactNode } from "react";
import classnames from "classnames";

interface MainWrapperProps {
  children?: ReactNode;
  extClassName?: string;
}

const MainWrapper: FC<MainWrapperProps> = ({ children, extClassName }) => {
  return <div className={classnames`${""} ${extClassName}`}>{children}</div>;
};

export default MainWrapper;
