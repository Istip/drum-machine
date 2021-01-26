import styled from "styled-components"

export const Button = styled.div`
  margin: 12px;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(199, 206, 214, 1) 0%,
    rgba(168, 172, 181, 1) 100%
  );
  border-radius: 12px;
  border: 6px solid #121212;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(254, 141, 81, 1) 0%,
      rgba(198, 69, 48, 1) 100%
    );
  }
`
