import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;

    &:hover {
      background-color: #00ddff;
      color: #000;
      cursor: pointer;

      svg {
        color: #00ddff;
      }
    }

    .logo {
      background-color: #000;
      padding: 0.8rem;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 1rem;
      }
    }
  }
`;
