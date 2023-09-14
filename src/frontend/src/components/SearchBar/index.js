import React from "react";
import { Botao, InputSearch, WrapperBar } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function SearchBar(props) {
  return (
    <>
      <WrapperBar>
        <Botao>
          Conteúdo <IoIosArrowDown />
        </Botao>
        <InputSearch placeholder={props.placeholder} />
        <AiOutlineSearch size={44} />
      </WrapperBar>
    </>
  );
}

export default SearchBar;
