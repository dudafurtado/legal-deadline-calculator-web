import { ReactNode } from "react";
import { Holiday } from "@/interfaces/entities";
import { Cities } from "@/interfaces/entities";

export interface MyContextType {
  reloadHolidayList: boolean;
  setReloadHolidayList: (term: boolean) => void;
  holidays: Holiday[];
  setHolidays: (term: Holiday[]) => void;
  cities: Cities[];
  setCities: (term: Cities[]) => void;
}

export interface MyProviderProps {
  children: ReactNode;
}
