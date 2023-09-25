import styled from "styled-components";

export const Container = styled.div`
  width: 110%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  padding: 10px;
  margin-bottom: 30px;
  box-sizing: border-box;

  div {
    width: 100%;
    &:first-child {
      text-align: end;
      box-sizing: border-box;
      padding: 10px;
      height: 50px;
    }
  }
`;

export const Compatibilidade = styled.div`
  margin-top: 20px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
`;

export const AlertaDias = styled.span`
  background-color: #4caf50;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 5px;
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    text-align: left;
    margin-left: 10px;
    &:first-child {
      color: #3aa3cb;
      font-weight: 600;
    }
  }
  img {
    width: 74px;
    height: 74px;
    border-radius: 37px;
    border: 3px solid #e5e5e5;
  }
`;

export const GeneralInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const DetalhesButton = styled.div`
  background: linear-gradient(90deg, #500c80, #654cba);
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
`;
