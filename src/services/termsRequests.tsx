import api from "./apiConnection";

export async function listTerms() {
  try {
    const response = await api.get("/terms");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao listar prazos.");
  }
}
