import { Container } from "./Countdown.styled";
import CardComponent from "./components/CardComponent";
import useCountdownFacade from "./countdownFacade";

const CountdownComponent = () => {
  const {
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
  } = useCountdownFacade();

  return (
    <Container>
      <CardComponent
        title="days"
        date={days}
        flip={flipDays}
        setFlip={setFlipDays}
      />
      <CardComponent
        title="hours"
        date={hours}
        flip={flipHours}
        setFlip={setFlipHours}
      />
      <CardComponent
        title="minutes"
        date={minutes}
        flip={flipMinutes}
        setFlip={setFlipMinutes}
      />
      <CardComponent
        title="seconds"
        date={seconds}
        flip={flipSeconds}
        setFlip={setFlipSeconds}
      />
    </Container>
  );
};

export default CountdownComponent;
