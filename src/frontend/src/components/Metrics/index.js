import React from "react";
import MetricsCard from "../MetricsCard";
import { Container } from "./style";
import VoceInvestiuIcon from "./../../assets/icons/voce-investiu-icon.svg";
import VoceGanhouIcon from "./../../assets/icons/voce-ganhou-icon.svg";
import VoceEstaIcon from "./../../assets/icons/voce-esta-icon.svg";

function Metrics() {
  return (
    <Container>
      <MetricsCard
        title="Você investiu"
        metric="0:55"
        label="Horas em conteúdo"
        icon={VoceInvestiuIcon}
      />
      <MetricsCard
        title="Você está"
        metric="90%"
        label="Engajado com as redes"
        icon={VoceEstaIcon}
      />
      <MetricsCard
        title="Você ganhou"
        metric="1300"
        label="BT's"
        icon={VoceGanhouIcon}
      />
    </Container>
  );
}

export default Metrics;
