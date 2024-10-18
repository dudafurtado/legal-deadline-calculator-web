import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useMyContext from "@/hooks/useMyContext";

export function SelectCity({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  const { cities } = useMyContext();

  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione uma cidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {cities.map((city) => (
            <SelectItem key={city.id} value={String(city.id)}>
              {city.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
