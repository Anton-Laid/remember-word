export type ValueOf<T> = T[keyof T];

export enum Role {
  ADMIN = "Admin",
  USER = "User",
}

export const userRole = {
  ADMIN: Role.ADMIN,
  RECIPIENT: Role.USER,
} as const;

export type UserRole = ValueOf<typeof userRole>;

export interface IUser {
  first_name: string | null;
  gender: boolean | null;
  second_name: string | null;
  third_name: string | null;
}
