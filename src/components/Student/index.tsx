import { ApplyForm } from "components/Common/ApplyForm";
import { List } from "components/Common/List";
import MainTemplate from "components/Common/MainTemplate";
import styled from "styled-components";

export const Student = () => {
  return (
    <Container>
      <MainTemplate />
      <ApplyForm />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1100px;
  width: 100%;
  padding: 35px;
`