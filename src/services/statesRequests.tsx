import api from "./apiConnection";

export async function listStates() {
  try {
    const response = await api.get("/states");
    return response.data;
  } catch (error) {
    throw new Error("Erro ao listar feriados.");
  }
}
