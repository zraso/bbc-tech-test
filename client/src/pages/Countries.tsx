import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Countries = () => {

  // Hooks
  // Handler functions

  return (
    <Container>
      <Button aria-label="submit-button" disabled={false} onClick={...}>
        Submit
      </Button>
    </Container>
  );
};

export default Countries;
