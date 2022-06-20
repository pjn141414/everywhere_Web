import { useDodamLogin } from "hooks/useDodamLogin";
import styled, { CSSProperties } from "styled-components";
import { theme } from "styles/theme";

type MainTemplateProps = {
  className?: string;
  customStyle?: CSSProperties;
}

const MainTemplate = ({
  className, customStyle,
}: MainTemplateProps) => {
  const { onClickDodamLogin } = useDodamLogin();
  const style: CSSProperties = {
    ...customStyle,
  }

  return (
    <div>
      <StyledLogo
        className={className}
        style={style}
      >
        everywhere
      </StyledLogo>
      <StyledButton onClick={onClickDodamLogin}>
        로그인
      </StyledButton>
    </div>
  );
}

const StyledLogo = styled.span`
  font-family: 'Pretendard-Bold';
  font-size: 15px;
  color: ${theme.color.primary};
`

const StyledButton = styled.a`
  font-size: 15px;
  color: ${theme.color.secondaryText};
  float: right;
`

export default MainTemplate;