import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    width: 100%;
  }
`;

export const TestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
`;

export const SliderWrapper = styled.div`
  margin-top: 10px;
  width: 80%;
`;

export const EnviarButton = styled.div`
  background: linear-gradient(90deg, #500c80, #654cba);
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  width: 100px;
  cursor: pointer;
`;
