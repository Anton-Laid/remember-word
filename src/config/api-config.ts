import { TAuthRoutes } from "../shared/types/auth";

export const config = { URL: import.meta.env.VITE_SERVER_URL };

export const AUTH_ROUTES: TAuthRoutes = {
  register: "/register",
  login: "/jwt/login",
  infoUser: "/user_info",
};

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};
