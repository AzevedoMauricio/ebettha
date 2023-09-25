import React, { useState } from "react";
import { Container, MainContainer } from "./style";
import NavBar from "../../components/NavBar";
import Metrics from "../../components/Metrics";
import FormsResultado from "../../components/FormsResultado";
import JobOpportunityContainer from "../../components/JobOpportunityContainer";

function HomePage() {
  const [reqState, setReqState] = useState(null);

  return (
    <>
      <NavBar />
      <Container>
        <MainContainer>
          <Metrics />
          <JobOpportunityContainer state={reqState} />
        </MainContainer>
      </Container>
      <FormsResultado updateState={setReqState} />
    </>
  );
}

export default HomePage;
