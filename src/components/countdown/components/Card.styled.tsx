import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

type CardProps = {
  flip?: boolean;
};

const flipTop = keyframes`
  100% {
    transform: rotateX(-90deg);
  }
`;

const flipBottom = keyframes`
  100% {
    transform: rotateX(0deg);
  }
`;

const FlipCardContainer = styled.div`
  position: relative;
  min-width: 148px;
  height: 140px;
  border-radius: 8px;
  box-shadow: 0px 10px 0px 0px #191a23;
  line-height: 1;
  perspective: 800px;

  @media (max-width: 767px) {
    min-width: 70px;
    height: 66px;
    border-radius: 4px;
    box-shadow: 0px 5px 0px 0px #191a23;
  }
`;

const CardPart = styled.div`
  position: relative;
  overflow: hidden;
  height: 50%;
  display: flex;
  justify-content: center;
  background: #343650;

  &::before,
  &::after {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    background: #191a23;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 767px) {
      width: 6px;
      height: 6px;
    }
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const CardTop = styled(CardPart)<CardProps>`
  border-radius: 8px 8px 0 0;
  animation: ${(props) =>
    props.flip
      ? css`
          ${flipTop} 400ms ease-in
        `
      : ""};
  transform-origin: bottom;

  &::before {
    bottom: 0;
    transform: translate(-50%, 50%);
  }

  &::after {
    bottom: 0;
    transform: translate(50%, 50%);
  }

  span {
    align-self: end;
    transform: translate(0, 50%);
  }
`;

const CardBottom = styled(CardPart)<CardProps>`
  border-radius: 0 0 8px 8px;
  animation: ${(props) =>
    props.flip
      ? css`
          ${flipBottom} 400ms ease-out 400ms
        `
      : ""};
  transform-origin: top;
  transform: rotateX(90deg);

  &::before {
    top: 0;
    transform: translate(-50%, -50%);
  }

  &::after {
    top: 0;
    transform: translate(50%, -50%);
  }

  span {
    align-self: start;
    transform: translate(0, -50%);
  }
`;

const WholeCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  div {
    transform: none;
  }
`;

const Date = styled.span`
  width: 100%;
  text-align: center;
  color: #fb5e84;
  font-size: 80px;
  letter-spacing: -2.4px;

  &::after {
    content: "";
    height: 1px;
    position: absolute;
    left: 6px;
    right: 6px;
    top: 50%;
    background: rgba(0, 0, 0, 0.3);

    @media (max-width: 767px) {
      left: 3px;
      right: 3px;
    }
  }

  @media (max-width: 767px) {
    font-size: 36px;
    letter-spacing: -1.1px;
  }
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h2`
  padding-top: 26px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 6px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 7px;
    letter-spacing: 3px;
  }
`;

export {
  FlipCardContainer,
  Date,
  CardTop,
  CardBottom,
  Shadow,
  CardTitle,
  WholeCard,
};
