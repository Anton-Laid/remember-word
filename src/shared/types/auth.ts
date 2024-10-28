export type TAuthRoutes = {
  register: string;
  login: string;
  infoUser: string;
};

export interface TypedResponse<T = Record<string, unknown>> extends Response {
  json<P = T>(): Promise<P>;
}

export type ResponseDto = {
  [key: string]: unknown;
};

export type ErrorDto = {
  message: string;
  httpStatusCode: number;
  [key: string]: unknown;
};

export interface ILogin {
  grant_type: string;
  login: string;
  password: string;
}

export type ILoginRequestDto = {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
};

export interface IRegister {
  email: string;
  password: string;
  organization: number;
}

export interface IToken {
  access_token: string;
}
