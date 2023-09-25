import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin-top: 30px;
`;

export const Header = styled.div`
  box-sizing: border-box;
  background: linear-gradient(90deg, #1a91bf, #5cc8f2);
  padding: 20px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  padding: 16px 30px 0px 30px;
  background-color: #f2f2f2;
  width: 100%;
  box-sizing: border-box;

  p {
    margin: 0;
  }

  ul {
    background-color: red;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
