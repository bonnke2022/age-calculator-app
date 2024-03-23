import styled from "styled-components";

const Arrow = () => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      viewBox="0 0 46 44"
    >
      <g fill="none" stroke="#FFF" strokeWidth="4">
        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
      </g>
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  @media screen and (min-width: 800px) {
    width: 40px;
    height: 40px;
    padding: 0.4rem;
  }
`;

export default Arrow;
