import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 30px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Yaho</Title>
    </Container>
  );
}
