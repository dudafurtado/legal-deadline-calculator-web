import { searchHolidaySchema } from "@/validations/holidaySchema";
import api from "./apiConnection";
import { z } from "zod";

export async function createHoliday(payload: unknown) {
  try {
    const response = await api.post("/holidays", payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao criar feriado.");
  }
}

export async function listHolidays() {
  try {
    const response = await api.get("/holidays");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao listar feriados.");
  }
}

export async function listHolidaysWithQuery(
  queryList: z.infer<typeof searchHolidaySchema>
) {
  try {
    const { search, state_id } = queryList;
    let query = "?";

    if (search) {
      query += `search=${search}`;
    }

    if (state_id) {
      query += `state_id=${state_id}`;
    }

    console.log(query);

    const response = await api.get(`/holidays${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao listar feriados.");
  }
}

export async function deleteHoliday(id: number) {
  try {
    await api.delete(`/holidays/${id}`);
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao criar feriado.");
  }
}
