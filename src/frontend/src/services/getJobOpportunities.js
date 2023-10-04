import axios from "axios";

// Faça a requisição POST
export async function GetJobOpportunities(data) {
  if (data) {
    return axios
      .post("http://15.229.70.174:5000/calculate_compatibility", data)
      .then(function (response) {
        // Manipule a resposta bem-sucedida aqui
        return response.data;
      })
      .catch(function (error) {
        // Manipule qualquer erro que ocorra durante a requisição
        console.error("Erro:", error);
      });
  } else {
    const mockData = {
      candidate: {
        score_res: 0.5,
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

    return axios
      .post("http://15.229.70.174:5000/calculate_compatibility", mockData)
      .then(function (response) {
        // Manipule a resposta bem-sucedida aqui
        return response.data;
      })
      .catch(function (error) {
        // Manipule qualquer erro que ocorra durante a requisição
        console.error("Erro:", error);
      });
  }
}
