import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  width: 30%;
  display: flex;
  padding: 15px;
  text-align: left;
  flex-wrap: wrap;
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: 10px;
    width: 30%;
  }
`;

export const Title = styled.p`
  width: 100%;
  color: #d4d4d4;
  margin: 0;
  text-align: left;
`;

export const MetricData = styled.p`
  margin: 0;
  width: 100%;
  font-size: 50px;
  font-weight: 800;
  background: linear-gradient(90deg, #5e32ba 0.52%, #1b89b4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MetricInfo = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  width: 80%;
  color: grey;
`;
