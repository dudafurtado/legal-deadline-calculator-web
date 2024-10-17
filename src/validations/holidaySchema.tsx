import { z } from "zod";

export const createHolidaySchema = z.object({
  name: z.string(),
  date: z.string(),
  state_id: z.number(),
});

export const searchHolidaySchema = z.object({
  search: z.string().optional(),
  state_id: z.number().optional(),
});
