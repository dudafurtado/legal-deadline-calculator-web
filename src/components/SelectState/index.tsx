"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listStates } from "@/services/statesRequests";
import { useEffect, useState } from "react";
import { State } from "@/interfaces/interfaces";

export function SelectInput() {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    async function loadStates() {
      const res = await listStates();

      setStates(res);
    }

    loadStates();
  }, []);

  const groupedStates = states.reduce(
    (acc: { [key: string]: State[] }, state) => {
      const { region } = state;
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(state);
      return acc;
    },
    {}
  );

  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione um estado" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(groupedStates).map(([region, statesInRegion]) => (
          <SelectGroup key={region}>
            <SelectLabel>{region}</SelectLabel>
            {statesInRegion.map((state) => (
              <SelectItem key={state.id} value={state.uf}>
                {state.name} ({state.uf})
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
