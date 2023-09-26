import { useState } from "react";
import {
  CardBottom,
  CardTitle,
  CardTop,
  Date,
  FlipCardContainer,
  Shadow,
  WholeCard,
} from "./Card.styled";

type CardComponentProps = {
  title: string;
  date: string;
  flip: boolean;
  setFlip: (flip: boolean) => void;
};

const CardComponent = ({ title, date, flip, setFlip }: CardComponentProps) => {
  const [topDate, setTopDate] = useState(date);
  const [bottomDate, setBottomDate] = useState(date);

  return (
    <div>
      <FlipCardContainer>
        <WholeCard>
          <CardTop>
            <Date>{date}</Date>
            <Shadow />
          </CardTop>
          <CardBottom>
            <Date>{bottomDate}</Date>
          </CardBottom>
        </WholeCard>

        <CardTop
          flip={flip}
          onAnimationStart={() => {
            setTimeout(() => setTopDate(date), 350);
          }}
        >
          <Date>{topDate}</Date>
          <Shadow />
        </CardTop>

        <CardBottom
          flip={flip}
          onAnimationEnd={() => {
            setFlip(false);
          }}
          onAnimationStart={() => {
            setTimeout(() => setBottomDate(date), 350);
          }}
        >
          <Date>{date}</Date>
        </CardBottom>
      </FlipCardContainer>
      <CardTitle>{title}</CardTitle>
    </div>
  );
};

export default CardComponent;
