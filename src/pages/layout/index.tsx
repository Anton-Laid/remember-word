import { Outlet } from "react-router-dom";
import MainWrapper from "../../shared/ui/main-wrapper";

export const Layout = () => {
  return (
    <MainWrapper>
      <header></header>
      <Outlet />
      <footer></footer>
    </MainWrapper>
  );
};
