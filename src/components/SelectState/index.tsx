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
import { listCities } from "@/services/cityRequests";
import { useEffect, useState } from "react";
import { State } from "@/interfaces/entities";
import useMyContext from "@/hooks/useMyContext";

export function SelectState({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  const [states, setStates] = useState<State[]>([]);
  const { setCities } = useMyContext();

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

  const handleStateChange = async (stateId: string) => {
    onChange(stateId);
    const citiesRes = await listCities(Number(stateId));

    setCities(citiesRes);
  };

  useEffect(() => {
    async function loadStates() {
      const res = await listStates();
      setStates(res);
    }

    loadStates();
  }, []);

  return (
    <Select defaultValue={value} onValueChange={handleStateChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione um estado" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(groupedStates).map(([region, statesInRegion]) => (
          <SelectGroup key={region}>
            <SelectLabel>{region}</SelectLabel>
            {statesInRegion.map((state) => (
              <SelectItem key={state.id} value={String(state.id)}>
                {state.name} ({state.uf})
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
