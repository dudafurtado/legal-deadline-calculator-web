"use client";

import { useState } from "react";
import MyContext from "@/context/MyContext";
import { MyProviderProps } from "@/interfaces/context";
import { Holiday } from "@/interfaces/interfaces";

export default function MyProvider({ children }: MyProviderProps) {
  const [reloadHolidayList, setReloadHolidayList] = useState<boolean>(false);
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const values = {
    reloadHolidayList,
    setReloadHolidayList,
    holidays,
    setHolidays,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
