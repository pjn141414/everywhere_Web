import { useDodamLogin } from 'hooks/useDodamLogin';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const KakaoCertification = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { handleDodamLogin } = useDodamLogin();

  useEffect(() => {
    if (code !== null && code !== undefined && code.length > 0) {
      handleDodamLogin(code);
    }
  }, [code, handleDodamLogin]);

  return (
    <div>
      <h1>개발 테스트용 도담 로그인 페이지 입니다.</h1>
      <span>CODE: {code}</span>
    </div>
  );
};