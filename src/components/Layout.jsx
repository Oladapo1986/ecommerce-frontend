import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
