import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { SliderWrapper, Container, TestContainer, EnviarButton } from "./style";

const data = {
  candidate: {
    score_res: 0.8,
    score_eng: 0.6,
    score_int: 0.7,
    score_cur: 0.4,
    score_sin: 0.5,
    score_dis: 0.6,
    score_specialist: 0.4,
    score_generalist: 0.6,
    score_classic: 0.2,
    score_order: 0.3,
    score_change: 0.4,
    score_tireless: 0.7,
    score_explorer: 0.5,
  },
  limit: 10,
};

function FormsResultado(props) {
  const [scoreRes, setScoreRes] = useState(72);
  const [scoreEng, setScoreEng] = useState(54);
  const [scoreInt, setScoreInt] = useState(63);
  const [scoreCur, setScoreCur] = useState(36);
  const [scoreSin, setScoreSin] = useState(45);
  const [scoreDis, setScoreDis] = useState(54);
  const [scoreSpecialist, setScoreSpecialist] = useState(2);
  const [scoreGeneralist, setScoreGeneralist] = useState(3);
  const [scoreHybrid, setScoreHybrid] = useState(4);
  const [scoreClassic, setScoreClassic] = useState(3);
  const [scoreOrder, setScoreOrder] = useState(4);
  const [scoreChange, setScoreChange] = useState(5);
  const [scoreTireless, setScoreTireless] = useState(6);
  const [scoreExplorer, setScoreExplorer] = useState(3);

  function handleChange() {
    const data = {
      candidate: {
        score_res: scoreRes / 90,
        score_eng: scoreEng / 90,
        score_int: scoreInt / 90,
        score_cur: scoreCur / 90,
        score_sin: scoreSin / 90,
        score_dis: scoreDis / 90,
        score_specialist: scoreSpecialist / 5,
        score_generalist: scoreGeneralist / 5,
        score_classic: scoreClassic / 9,
        score_order: scoreOrder / 9,
        score_change: scoreChange / 9,
        score_tireless: scoreTireless / 9,
        score_explorer: scoreExplorer / 9,
      },
      limit: 10,
    };

    props.updateState(data);
  }

  return (
    <Container>
      <TestContainer>
        <h2>Superfit</h2>
        <SliderWrapper>
          <span>score_res</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreRes(value[1])}
          />
          <span>{scoreRes}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_eng</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreEng(value[1])}
          />
          <span>{scoreEng}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_int</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreInt(value[1])}
          />
          <span>{scoreInt}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_cur</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreCur(value[1])}
          />
          <span>{scoreCur}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_sin</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreSin(value[1])}
          />
          <span>{scoreSin}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_dis</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={90}
            defaultValue={[0, 50]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreDis(value[1])}
          />
          <span>{scoreDis}</span>
        </SliderWrapper>
      </TestContainer>
      <TestContainer>
        <h2>Lifestyle</h2>
        <SliderWrapper>
          <span>score_specialist</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={5}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreSpecialist(value[1])}
          />
          <span>{scoreSpecialist}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_generalist</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={5}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreGeneralist(value[1])}
          />
          <span>{scoreGeneralist}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_hybrid</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={5}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreHybrid(value[1])}
          />
          <span>{scoreHybrid}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_classic</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={9}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreClassic(value[1])}
          />
          <span>{scoreClassic}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_order</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={9}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreOrder(value[1])}
          />
          <span>{scoreOrder}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_change</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={9}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreChange(value[1])}
          />
          <span>{scoreChange}</span>
        </SliderWrapper>
        <SliderWrapper>
          <span>score_tireless</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={9}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreTireless(value[1])}
          />
          <span>{scoreTireless}</span>
        </SliderWrapper>{" "}
        <SliderWrapper>
          <span>score_explorer</span>
          <RangeSlider
            className="single-thumb"
            min={0}
            max={9}
            defaultValue={[0, 5]}
            thumbsDisabled={[true, false]}
            rangeSlideDisabled={true}
            onInput={(value) => setScoreExplorer(value[1])}
          />
          <span>{scoreExplorer}</span>
        </SliderWrapper>
      </TestContainer>
      <EnviarButton onClick={() => handleChange()}>Alterar</EnviarButton>
    </Container>
  );
}

export default FormsResultado;
