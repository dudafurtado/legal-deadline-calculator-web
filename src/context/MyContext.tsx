"use client";

import { createContext } from "react";
import { MyContextType } from "@/interfaces/context";

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
