import { IResponse } from "types/response.type";

export interface tokenReissuanceDto {
  refreshToken: string;
}

export interface ITokenReissuanceRes extends IResponse {
  data: string;
}

export interface dodamLoginDto {
  code: string;
}

export interface IDodamLoginRes extends IResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}