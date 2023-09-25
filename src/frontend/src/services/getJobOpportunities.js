import axios from "axios";

// Faça a requisição POST
export async function GetJobOpportunities(data) {
  return axios
    .post("http://127.0.0.1:5000/calculate_compatibility", data)
    .then(function (response) {
      // Manipule a resposta bem-sucedida aqui
      return response.data;
    })
    .catch(function (error) {
      // Manipule qualquer erro que ocorra durante a requisição
      console.error("Erro:", error);
    });
}
