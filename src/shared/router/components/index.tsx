import { Navigate, Outlet } from "react-router-dom";
import { UserRole } from "../../types/user";
import { Routes } from "../../config";

interface CommonRouteProps {
  someflag?: never;
}

interface PublicRouteProps extends CommonRouteProps {
  publicRoutes: true;
  allowed?: never;
  onlyUnauthorized?: never;
  isRoot?: never;
}

interface OnlyUnauthorizedRouteProps extends CommonRouteProps {
  onlyUnauthorized: boolean;
  allowed?: never;
  publicRoutes?: never;
  isRoot?: never;
}

interface RoledRouteProps extends CommonRouteProps {
  allowed: {
    [key in UserRole]?: boolean;
  };
  publicRoutes?: never;
  onlyUnauthorized?: never;
  isRoot?: boolean;
}

type RoutesGroupProps =
  | PublicRouteProps
  | RoledRouteProps
  | OnlyUnauthorizedRouteProps;

export const RoutesGroup = ({
  publicRoutes,
  onlyUnauthorized,
  allowed,
  isRoot,
}: RoutesGroupProps) => {
  const token = true;

  const isLoading = false;

  if (!token) {
    return <Navigate to={Routes.LOGIN} />;
  }

  if (publicRoutes) {
    return <Outlet />;
  }

  if (isLoading) {
    return null;
  }

  if (isRoot) {
    return <Outlet />;
  }

  return <Outlet />;
};
