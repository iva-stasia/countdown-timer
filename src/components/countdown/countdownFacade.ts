import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { format, useSetFlip } from "../../utils";

const useCountdownFacade = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [flipDays, setFlipDays] = useState(false);
  const [flipHours, setFlipHours] = useState(false);
  const [flipMinutes, setFlipMinutes] = useState(false);
  const [flipSeconds, setFlipSeconds] = useState(false);

  const year = (dayjs().year() + 1).toString();
  const countToDate = dayjs(`${year}-01-01 00:00`);

  useSetFlip(days, setFlipDays);
  useSetFlip(hours, setFlipHours);
  useSetFlip(minutes, setFlipMinutes);
  useSetFlip(seconds, setFlipSeconds);

  useEffect(() => {
    setInterval(() => {
      setTime();
    }, 1000);
  }, []);

  const setTime = () => {
    const currentDate = dayjs();
    const daysDiff = countToDate.diff(currentDate, "day");
    const hoursDiff = countToDate.diff(currentDate, "hour") % 24;
    const minutesDiff = countToDate.diff(currentDate, "minute") % 60;
    const secondsDiff = countToDate.diff(currentDate, "second") % 60;

    setDays(format(daysDiff));
    setHours(format(hoursDiff));
    setMinutes(format(minutesDiff));
    setSeconds(format(secondsDiff));
  };

  return {
    days,
    hours,
    minutes,
    seconds,
    flipDays,
    flipHours,
    flipMinutes,
    flipSeconds,
    setFlipDays,
    setFlipHours,
    setFlipMinutes,
    setFlipSeconds,
  };
};

export default useCountdownFacade;
