import styled from "styled-components";
import { theme } from "styles/theme";

const LabTable = () => {
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <td>국어전용실</td>
            <td>프로그래밍1실</td>
          </tr>
          <tr>
            <td>수학전용실</td>
            <td>프로그래밍2실</td>
          </tr>
          <tr>
            <td>사회전용실</td>
            <td>프로그래밍3실</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default LabTable;

const Container = styled.div`
  width: 500px;
  height: 650px;
  display: flex;
`

const Table = styled.table`
  width: 100%;
  border: 1px solid ${theme.color.buttonBackground};
  border-collapse: collapse;
  display: table;
  table-layout: fixed;

  & > tr, td {
    padding: 20px;
    border: 1px solid ${theme.color.buttonBackground};
    display: table-cell;
    vertical-align: top;
  }
`