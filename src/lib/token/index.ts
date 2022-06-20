import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'constants/api.constants';
import jwt, { JwtPayload } from 'jsonwebtoken';

class Token {
  public static getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public static decodeToken(key: string): JwtPayload {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public static setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public static removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default Token;