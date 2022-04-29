import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: "Montserrat", sans-serif;

  .title h1 span {
    margin-left: 0.5rem;
    color: #00ddff;
    letter-spacing: 0.2rem;
    font-family: "Permanent Marker", cursive;
  }

  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.3rem 0.3rem 0.5rem 0.6rem;
    border-radius: 1rem;

    svg {
      color: #00ddff;
    }

    input {
      background-color: transparent;
      border: none;
      color: #00ddff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #00ddff;
      }
      &:focus {
        outline: none;
      }
    }
  }




  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  }

  .search {
    margin-top: 1.3rem;
  }
`;
