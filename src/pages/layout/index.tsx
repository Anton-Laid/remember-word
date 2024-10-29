import MainWrapper from "../../shared/ui/main-wrapper";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};
