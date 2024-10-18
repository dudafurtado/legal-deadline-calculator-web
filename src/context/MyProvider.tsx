"use client";

import { useState } from "react";
import MyContext from "@/context/MyContext";
import { MyProviderProps } from "@/interfaces/context";
import { Holiday } from "@/interfaces/entities";
import { Cities } from "@/interfaces/entities";

export default function MyProvider({ children }: MyProviderProps) {
  const [reloadHolidayList, setReloadHolidayList] = useState<boolean>(false);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [cities, setCities] = useState<Cities[]>([]);

  const values = {
    reloadHolidayList,
    setReloadHolidayList,
    holidays,
    setHolidays,
    cities,
    setCities,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
