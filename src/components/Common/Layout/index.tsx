import { ReactNode } from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`