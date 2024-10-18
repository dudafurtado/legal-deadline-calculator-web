import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listTerms } from "@/services/termsRequests";
import { Term } from "@/interfaces/entities";

export function SelectTerm({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  const [terms, setTerms] = useState<Term[]>([]);

  useEffect(() => {
    async function loadTerms() {
      const res = await listTerms();
      setTerms(res);
    }

    loadTerms();
  }, []);

  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione um Prazo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {terms.map((term) => (
            <SelectItem key={term.id} value={String(term.id)}>
              {term.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
