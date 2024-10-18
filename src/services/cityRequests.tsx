import api from "./apiConnection";

export async function listCities(id: number) {
  try {
    const response = await api.get(`/states/${id}/cities`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao listar cidades.");
  }
}
