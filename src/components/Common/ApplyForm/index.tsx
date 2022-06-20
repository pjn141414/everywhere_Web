import styled from "styled-components";
import { theme } from "styles/theme";

export const ApplyForm = () => {
  return (
    <Apply>
      <ApplyTop>
        <ApplyTopBtn>신청</ApplyTopBtn>
      </ApplyTop>

      <ApplyContent>

      </ApplyContent>
    </Apply>
  );
}

const Apply = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  justify-content: unset;
  flex-direction: column;
  border: 1px solid ${theme.color.buttonBackground};
  position: relative;
  overflow: hidden;
  
`

const ApplyTop = styled.div`
  height: 50px;
  display: inherit;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid ${theme.color.buttonBackground};
`

const ApplyTopBtn = styled.button`
  width: 12.5%;
  height: 100%;
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: inherit;
  cursor: pointer;
  user-select: none;
  border: none;
  background-color: #ffffff;
`

const ApplyContent = styled.div`
  
`