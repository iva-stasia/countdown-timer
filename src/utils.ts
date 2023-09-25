import { useEffect } from "react";

const format = (num: number): string => {
  return num > 9 ? num.toString() : "0" + num;
};

const useSetFlip = (param: string, setFlip: (flip: boolean) => void) => {
  useEffect(() => {
    setFlip(true);
  }, [param, setFlip]);
};

export { format, useSetFlip };
