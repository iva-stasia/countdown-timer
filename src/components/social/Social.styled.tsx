import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  line-height: 0;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: color 100ms ease-in-out;
  &:hover {
    color: #fb5e84;
  }
`;

export { Container, Link };
