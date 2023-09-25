import React from "react";
import {
  AlertaDias,
  Compatibilidade,
  Container,
  DetalhesButton,
  GeneralInfo,
  MainInfo,
} from "./style";
import { LuSiren } from "react-icons/lu";
import { GiSuitcase } from "react-icons/gi";
import { FaLocationPin } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";

function JobOpportunityCard(props) {
  return (
    <>
      <Container>
        <div>
          <AlertaDias>
            <LuSiren /> Encerra em <strong>9 dias</strong>
          </AlertaDias>
        </div>
        <MainInfo>
          <img src={props.image} alt="Logo" />
          <div>
            <p>Estágio - {props.nome}</p>
            <p>{props.nome}</p>
          </div>
        </MainInfo>
        <GeneralInfo>
          <span>
            <GiSuitcase />
            Estágio
          </span>
          <span>
            <FaLocationPin />
            São Paulo/SP
          </span>
          <span>
            <AiFillClockCircle />
            01/10/2023
          </span>
        </GeneralInfo>
        <Compatibilidade
          style={{
            backgroundColor:
              props.compatibilidade >= 70 ? "#4caf50" : "#ffdb58",
          }}
        >
          Você é {props.compatibilidade}% compatível com essa vaga
        </Compatibilidade>
        <DetalhesButton>Detalhes</DetalhesButton>
      </Container>
    </>
  );
}

export default JobOpportunityCard;
