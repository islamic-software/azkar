import { useCallback, useState } from "react";
import data from "src/data/azkar.json";

type Zkar = {
  count: number;
  header: string | null;
  body: string;
  reason: string | null;
};
type Azkar = Zkar[];

export function useAzkar() {
  const [azkar, setAzkar] = useState<Azkar>(data);

  const countDown = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= azkar.length) return;

      const azkarCopy: Azkar = JSON.parse(JSON.stringify(azkar));
      const zkar: Zkar = { ...azkarCopy[idx] };

      if (zkar.count <= 0) return;
      azkarCopy[idx].count -= 1;
      setAzkar(azkarCopy);
    },
    [azkar]
  );

  return {
    countDown,
    azkar,
  };
}
