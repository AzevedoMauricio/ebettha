import axios from "axios";

// Faça a requisição POST
export async function GetJobOpportunities(data) {
  if (data) {
    return axios
      .post("http://15.229.9.120:5000/calculate_compatibility", data)
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
        score_res: 46 / 90,
        score_eng: 60 / 90,
        score_int: 58 / 90,
        score_cur: 48 / 90,
        score_sin: 48 / 90,
        score_dis: 48 / 90,
        score_specialist: 0.4,
        score_generalist: 0.6,
        score_classic: 0.0,
        score_order: 0.2222222222222222,
        score_change: 0.4444444444444444,
        score_tireless: 0.6666666666666666,
        score_explorer: 0.3888888888888889,
      },
      limit: 10,
    };

    return axios
      .post("http://127.0.0.1:5000/calculate_compatibility", mockData)
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
