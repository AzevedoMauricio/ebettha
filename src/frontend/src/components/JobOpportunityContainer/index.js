import React, { useEffect, useState } from "react";
import { Body, Container, Header, Title } from "./style";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegLightbulb } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import JobOpportunityCard from "../JobOpportunityCard";
import { GetJobOpportunities } from "../../services/getJobOpportunities";

function JobOpportunityContainer(props) {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await GetJobOpportunities(props.state);
      setJobs(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await GetJobOpportunities(props.state);
      setJobs(data);
    })();
  }, [props.state]);

  return (
    <Container>
      <Header>
        <Title>
          <FaRegLightbulb />
          Vagas Sugeridas
        </Title>
      </Header>
      <Body>
        {jobs ? (
          <Swiper
            style={{
              "--swiper-pagination-color": "#6a51a9",
              "--swiper-pagination-bullet-size": "10px",
            }}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            {jobs.map((item) => {
              return (
                <SwiperSlide>
                  <JobOpportunityCard
                    compatibilidade={item.compatibility}
                    nome={item.nome}
                    image={item.logo}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <p>Carregando...</p>
        )}
      </Body>
    </Container>
  );
}

export default JobOpportunityContainer;
