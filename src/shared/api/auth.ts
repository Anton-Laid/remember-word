import { AUTH_ROUTES, config, DEFAULT_HEADERS } from "../../config/api-config";
import {
  ErrorDto,
  ILogin,
  ILoginRequestDto,
  IRegister,
  IToken,
  ResponseDto,
  TypedResponse,
} from "../types/auth";
import { IUser } from "../types/user";

class Auth {
  constructor(
    private readonly baseUrl: string,
    private readonly router: string,
    private readonly headers: Record<string, string>
  ) {}

  private static _checkResponse(
    res: TypedResponse<ResponseDto>
  ): Promise<ResponseDto> {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((error) => {
      error.httpStatusCode = res.status;
      return Promise.reject(error as ErrorDto);
    });
  }

  public login(dto: ILogin) {
    const fetchOptions = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(dto),
    };
    return fetch(
      `${this.baseUrl}${this.router}${AUTH_ROUTES.login}`,
      fetchOptions
    ).then(Auth._checkResponse) as Promise<IToken>;
  }

  public register(dto: IRegister) {
    const fetchOptions = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: dto.email,
        password: dto.password,
        FK_organisation_id: dto.organization,
      }),
    };
    return fetch(
      `${this.baseUrl}${this.router}${AUTH_ROUTES.register}`,
      fetchOptions
    ).then((res) => {
      Auth._checkResponse(res);
    }) as Promise<ILoginRequestDto>;
  }

  public getUser(): Promise<IUser> {
    const token = localStorage.getItem("token");
    const fetchOptions = {
      method: "GET",
      headers: {
        ...this.headers,
        Authorization: "Bearer " + token,
      },
    };
    return fetch(
      `${this.baseUrl}${this.router}${AUTH_ROUTES.infoUser}`,
      fetchOptions
    ).then((res) => {
      return Auth._checkResponse(res);
    }) as Promise<IUser>;
  }
}

export const authApi = new Auth(config.URL, "/auth", DEFAULT_HEADERS);
