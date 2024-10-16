import api from "./apiConnection";
import { z } from "zod";

export async function createHoliday(payload: unknown) {
  try {
    const response = await api.post("/holidays", payload);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar feriado.");
  }
}

export async function listHolidays() {
  try {
    const response = await api.get("/holidays");
    return response.data;
  } catch (error) {
    throw new Error("Erro ao listar feriados.");
  }
}
