import React from "react";
import { ListItem, NavContainer, NavList, PerfilWrapper } from "./style";
import { IoIosArrowDown } from "react-icons/io";
import LogoBettha from "./../../assets/images/logo-bettha.png";
import LuanIcon from "./../../assets/images/luan.jpg";
import SearchBar from "../SearchBar";

function NavBar() {
  return (
    <>
      <NavContainer>
        <img src={LogoBettha} alt="Logo Bettha" />
        <SearchBar placeholder="O que você está procurando?" />
        <NavList>
          <ListItem>Conteúdo</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Vagas</ListItem>
        </NavList>
        <PerfilWrapper>
          <img src={LuanIcon} alt="Imagem de perfil" />
          <p>
            Vai Luan <IoIosArrowDown />
          </p>
        </PerfilWrapper>
      </NavContainer>
    </>
  );
}

export default NavBar;
