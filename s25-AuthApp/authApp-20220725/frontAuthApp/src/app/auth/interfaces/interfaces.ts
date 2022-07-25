export interface Usuario {
  uid: string;
  name: string;
  email: string;
}

export interface UserResponse {
  ok: true;
  uid: string;
  name: string;
  email: string;
  token: string;
}
export interface ErrorResposne {
  ok: false;
  msg: string;
}

export type AuthResponse = UserResponse | ErrorResposne;
