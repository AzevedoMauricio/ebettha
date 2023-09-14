import styled from "styled-components";

export const WrapperBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #767676;
  height: 37px;
  box-sizing: border-box;
  border-radius: 6px;

  svg {
    margin-right: 12px;
    color: #6a51a9;
  }
`;

export const Botao = styled.button`
  display: flex;
  align-items: center;
  background-color: #6a51a9;
  padding: 8px 20px;
  border-radius: 6px;
  height: 37px;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-family: "Poppins";
  z-index: 1;

  svg {
    color: #fff;
    margin-left: 10px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  max-width: 270px;
  padding: 0 12px 0 12px;
  margin-left: -10px;
  z-index: 0;
  border-radius: 6px;
  font-family: "Poppins";
  border: 0;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #767676;
  }
`;
