import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/api.constants";
import { dodamLogin } from "lib/apis/auth/auth.api";
import Token from "lib/token";
import { dotenv } from "lib/util/dotenv";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useDodamLogin = () => {
  const navigate = useNavigate();
  const onClickDodamLogin = useCallback((): void => {
    window.location.href = `http://dauth.b1nd.com/login?client_id=${dotenv.SERVICE_ID}&redirect_uri=${dotenv.REDIRECT_URL}`;
  }, []);

  const handleDodamLogin = useCallback(
    async (code: string) => {
      try {
        console.log(code);
        const { data } = await dodamLogin({
          code,
        });
        console.log(data);
        if (data.accessToken && data.refreshToken) {
          Token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
          Token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
          console.log('로그인 성공');
          navigate('/');
        }
      } catch (e: any) {
        console.log('로그인 실패');
        navigate('/');
        console.log(e);
      }
    },
    [navigate],
  );

  return { onClickDodamLogin, handleDodamLogin };
};