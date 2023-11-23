import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import data from "src/data/azkar.json";

type Zkar = {
  count: number;
  repeatsLeft: number[];
  header: string | null;
  body: string;
  reason: string | null;
};
type Azkar = Zkar[];
enum ZkarMode {
  Solo = "solo",
  Couple = "couple",
}

export function useAzkar() {
  const params = useSearchParams();
  const mode =
    params && params.get("mode") == ZkarMode.Couple
      ? ZkarMode.Couple
      : ZkarMode.Solo;

  const [azkar, setAzkar] = useState<Azkar>(
    data.map((z) => ({
      ...z,
      repeatsLeft: [z.count],
    }))
  );

  useEffect(() => {
    if (mode == ZkarMode.Solo) return;
    const azkarCopy = JSON.parse(JSON.stringify(azkar)) as Azkar;
    for (const zkar of azkarCopy) {
      zkar.repeatsLeft = [zkar.count, zkar.count];
    }
    setAzkar(azkarCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const countDown = useCallback(
    (repeatIdx: number, zkarIdx: number) => {
      if (zkarIdx < 0 || zkarIdx >= azkar.length) return;

      const azkarCopy: Azkar = JSON.parse(JSON.stringify(azkar));
      const zkar: Zkar = { ...azkarCopy[zkarIdx] };

      if (zkar.repeatsLeft[repeatIdx] <= 0) return;
      azkarCopy[zkarIdx].repeatsLeft[repeatIdx] -= 1;
      setAzkar(azkarCopy);
    },
    [azkar]
  );

  return {
    countDown,
    azkar,
  };
}
