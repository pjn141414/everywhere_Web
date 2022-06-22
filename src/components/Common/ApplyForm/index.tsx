import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

type CheckBoxProps = {
  id?: string;
  children: string;
};

const CheckBox = ({ id, children }: CheckBoxProps) => {
  const [selectType, setSelectType] = useState();

  const onChangeSelect = (e: any) => {
    console.log(e.target.value);
    setSelectType(e.target.value);
  }

  useEffect(() => {
    if (selectType !== undefined) {
      console.log(selectType);
    }
  }, [selectType]);

  return (
    <>
      <TeamType
        id={id}
        type={"radio"}
        name={"teamType"}
        onClick={onChangeSelect} />
      <TeamTypeTitle htmlFor={id}>{children}</TeamTypeTitle>
    </>
  );
}

const ApplyForm = () => {
  return (
    <Apply>
      <ApplyTop>
        <ApplyTopBtn>신청</ApplyTopBtn>
        <ApplyTopBtn>내 신청</ApplyTopBtn>
      </ApplyTop>

      <ApplyContent>
        <Title>팀 형태</Title>
        <CheckType>
          <CheckBox id={"1"}>동아리</CheckBox>
          <CheckBox id={"2"}>프로젝트</CheckBox>
          <CheckBox id={"3"}>스터디</CheckBox>
        </CheckType>

        <Title>팀 이름</Title>
        <TeamInfo
          id="name"
        />

        <Title>원하는 자습실</Title>
        <TeamInfo
          id="lab"
        />

        <Title>프로젝트 계획서</Title>
        <TeamInfo
          id="lab"
          type={"file"}
        />
        <Intro>
          <FileIntro>
            * 파일은 최대 50MB까지 업로드하실 수 있습니다. <br />
            * 프로젝트 계획서는 한 개의 파일만 제출해 주세요. <br /> <br />
            해당 프로젝트 계획서에는 상세하게 기재 부탁드립니다. <br />
            상세하게 기재할 수록 원하는 자습실에 배치될 확률이 높아집니다.</FileIntro>
        </Intro>

        <DownloadGuide href="download.pdf" type="media_type" download={"랩실 신청서.pdf"}>신청서 양식을 가지고 있지 않다면?</DownloadGuide>
        <Button>
          <SubmitButton type="submit">제출하기</SubmitButton>
        </Button>
      </ApplyContent>
    </Apply>
  );
}

export default ApplyForm;

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
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
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
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
`

const Title = styled.span`
  display: flex;
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  &::after {
    content: "*";
    color: ${theme.color.primary};
  }
  padding-bottom: 10px;
  padding-top: 20px;
`

const TeamType = styled.input`
  display: none;
`

const TeamTypeTitle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 40px;
  font-family: 'Pretendard-Regular';
  border: 1px solid ${theme.color.buttonBackground};
  border-radius: 10px;
  font-size: 12px;
  color: ${theme.color.secondaryText};
  background-color: white;
  margin-right: 10px;
`

const CheckType = styled.div`
  display: flex;

  & > ${TeamType}:checked + label {
    color: white;
    background-color: ${theme.color.primary};
    border: 1px solid ${theme.color.primary};
    border-radius: 10px;
    font-family: 'Pretendard-SemiBold';
  }
`

const TeamInfo = styled.input`
  width: 380px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${theme.color.buttonBackground};
  user-select: none;
  padding: 10px;

  &:focus {
    outline: none;
  }
`

const Intro = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`

const FileIntro = styled.span`
  font-family: 'Pretendard-Regular';
  font-size: 12px;
  color: ${theme.color.secondaryText};
`

const Button = styled.div`
  display: flex;
  align-items: flex-end;
`

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  display: flex; 
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 10px;
  color: white;
  background-color: ${theme.color.primary};
  font-family: 'Pretendard-Bold';
  font-size: 15px;
`

const DownloadGuide = styled.a`
  display: flex;
  color: ${theme.color.secondaryText};
  font-size: 12px;
  justify-content: flex-end;
  margin-top: 15px;
  margin-bottom: 10px;
`