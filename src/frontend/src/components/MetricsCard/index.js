import React from "react";
import { CardContainer, Title, MetricData, MetricInfo } from "./style";

function MetricsCard(props) {
  return (
    <CardContainer>
      <Title>{props.title}</Title>
      <img src={props.icon} alt="Ícone de relógio" />
      <MetricData>{props.metric}</MetricData>
      <MetricInfo>{props.label}</MetricInfo>
    </CardContainer>
  );
}

export default MetricsCard;
