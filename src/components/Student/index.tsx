import ApplyForm from "components/Common/ApplyForm";
import LabTable from "components/Common/LabTable";
import MainTemplate from "components/Common/MainTemplate";
import styled from "styled-components";
import typeImg from 'assets/images/type.svg';

export const Student = () => {
  return (
    <Container>
      <MainTemplate />
      <Content>
        <Lab>
          <Title>
            <TableTitle>기숙사동 1F</TableTitle>
            <Image src={typeImg} />
          </Title>
          <LabTable />
        </Lab>
        <ApplyForm />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: 100%;
  padding: 35px;
`

const TableTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 40px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const Lab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
width: 30%;
  display: flex;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`