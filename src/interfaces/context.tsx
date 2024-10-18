import { ReactNode } from "react";
import { Holiday } from "@/interfaces/interfaces";

export interface MyContextType {
  reloadHolidayList: boolean;
  setReloadHolidayList: (term: boolean) => void;
  holidays: Holiday[];
  setHolidays: (term: Holiday[]) => void;
}

export interface MyProviderProps {
  children: ReactNode;
}
