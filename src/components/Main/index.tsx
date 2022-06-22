import { MainButton } from 'components/Common/MainButton';
import MainTemplate from 'components/Common/MainTemplate';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import mainIllu from 'assets/images/main_illust.svg';

export const Main = () => {
  return (
    <Container>
      <MainTemplate />
      <Title>
        <p>자습이 많은 대소고인들을 위해 등장한,</p>
        <IntroTitle>자습실이 필요해?</IntroTitle>
        <IntroTitle>everywhere!</IntroTitle> <br />
        <SubTitle>
          2층 랩실이 전부 사라진 이 시점, <br />
          우리 대소고 학생들은 어떻게 해야하나요? <br />
          걱정마세요, ‘everywhere’이 있으니까!
        </SubTitle>
      </Title>
      <Image src={mainIllu} />
      <Button>
        <MainButton
          route='/lab'
        >
          자습실<br />구경하기
        </MainButton>
        <MainButton
          route='http://moram.b1nd.com'
        >
          팀(원)<br />구하러가기
        </MainButton>
      </Button>
    </Container >
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: 100%;
  padding: 35px;
`

const Title = styled.div`
  padding-top: 140px;
  font-size: 50px;
  font-family: 'Pretendard-Bold';
  width: 400px;
  position: absolute;

  & > p {
    font-size: 18px;
    font-family: 'Pretendard-SemiBold';
  }
`

const IntroTitle = styled.span`
  color: ${theme.color.primaryText};
  text-shadow: 5px ${theme.color.secondaryText};
  font-size: 50px;
  font-family: 'Pretendard-Bold';

  &:nth-child(3) {
    color: ${theme.color.primary};
  }
`

const SubTitle = styled.div`
  padding-top: 15px;
  color: ${theme.color.secondaryText};
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  line-height: 25px;
`

const Image = styled.img`
  position: relative;
  padding-left: 480px;
  width: 650px;
  padding-top: 70px;
`

const Button = styled.div`
  flex-direction: row;
  display: flex;
  position: absolute;
  margin-top: -150px;
`