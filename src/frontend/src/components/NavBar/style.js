import styled from "styled-components";

export const NavContainer = styled.nav`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 30px 50px;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 112px;
  }
`;

export const PerfilWrapper = styled.div`
  display: flex;

  img {
    margin-right: 20px;
    border-radius: 24px;
    max-width: 48px;
    max-height: 48px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 30%;
`;

export const ListItem = styled.li`
  margin-right: 30px;
`;

export const NavWrapper = styled.div`
  display: flex;
`;
