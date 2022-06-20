import { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'constants/api.constants';
import { getTokenReissuance } from 'lib/apis/auth/auth.api';
import Token from 'lib/token';

const requestHandler = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let accessToken: string | null = Token.getToken(ACCESS_TOKEN_KEY);
  let usingRefreshToken: string | null = Token.getToken(REFRESH_TOKEN_KEY);

  if (accessToken && usingRefreshToken) {
    const decode: any = Token.decodeToken(ACCESS_TOKEN_KEY);
    const nowDate: number = Date.now() / 1000;

    if (decode.exp < nowDate) {
      try {
        const data = await getTokenReissuance({
          refreshToken: usingRefreshToken,
        });
        Token.setToken(ACCESS_TOKEN_KEY, data.data);
        accessToken = data.data;
      } catch (e: any) {
        if (e.response.data.status === 410) {
          Token.removeToken();
        }
      }
    }
    config.headers!['x-access-token'] = `Bearer ${accessToken}`;
  }

  return config;
};

export default requestHandler;