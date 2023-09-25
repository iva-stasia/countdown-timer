import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
`;

export { Container };
