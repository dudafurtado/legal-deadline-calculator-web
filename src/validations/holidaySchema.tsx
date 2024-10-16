import { z } from "zod";

export const createHolidaySchema = z.object({
  name: z.string(),
  date: z.string(),
  state_id: z.number(),
});
