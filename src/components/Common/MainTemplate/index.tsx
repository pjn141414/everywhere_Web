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
    <Container>
      <StyledLogo
        className={className}
        style={style}
        onClick={() => window.location.href = "/"}
      >
        everywhere
      </StyledLogo>
      <StyledButton onClick={onClickDodamLogin}>
        로그인
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 70px;
`

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