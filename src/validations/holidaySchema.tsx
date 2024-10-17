import { z } from "zod";

export const createHolidaySchema = z.object({
  name: z.string(),
  date: z.date(),
  state_id: z.string(),
});

export const searchHolidaySchema = z.object({
  search: z.string().optional(),
  state_id: z.number().optional(),
});
