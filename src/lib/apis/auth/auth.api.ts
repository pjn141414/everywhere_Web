import { dodamLoginDto, IDodamLoginRes, ITokenReissuanceRes, tokenReissuanceDto } from "lib/apis/auth/dto/auth.dto";
import axiosClient from "lib/axios/axiosClient";

export const getTokenReissuance = async (
  dto: tokenReissuanceDto,
): Promise<ITokenReissuanceRes> => {
  const url: string = `/auth/refresh`;
  const { data } = await axiosClient.post<ITokenReissuanceRes>(url, dto);
  return data;
};

export const dodamLogin = async (
  dto: dodamLoginDto
): Promise<IDodamLoginRes> => {
  const url: string = `/auth/dodam/login`;
  const { data } = await axiosClient.post<IDodamLoginRes>(url, dto);
  return data;
}