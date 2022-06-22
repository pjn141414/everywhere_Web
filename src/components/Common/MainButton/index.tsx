import { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';
import { theme } from 'styles/theme';

type MainButtonProps = {
  className?: string;
  children: ReactNode;
  customStyle?: CSSProperties;
  route: string;
}

export const MainButton = ({
  className, children, customStyle, route
}: MainButtonProps) => {

  const style: CSSProperties = {
    ...customStyle,
  }

  return (
    <div>
      <StyledButton
        className={className}
        style={style}
        onClick={() => window.location.href = `${route}`}
      >
        {children}
        <FaPlayCircle className='icon' />
      </StyledButton>
    </div>
  );
}

const StyledButton = styled.button`
  position: flex;
  width: 210px;
  height: 170px;
  background: #E3E6ED;
  opacity: 0.5;
  box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border-style: none;
  font-size: 23px;
  font-family: 'Pretendard-SemiBold';
  text-align: left;
  padding-left: 30px;
  margin-right: 20px;

  .icon {
    color: ${theme.color.primaryText};
    display: flex;
    padding-top: 50px;
    padding-left: 135px;
  }
`