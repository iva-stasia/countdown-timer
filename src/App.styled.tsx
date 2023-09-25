import styled from "@emotion/styled";
import bgStars from "./assets/bg-stars.svg";
import bgHills from "./assets/pattern-hills.svg";

const Background = styled.div`
  height: 100%;
  background: bottom / contain no-repeat url(${bgHills}),
    center / cover no-repeat url(${bgStars});

  @media (max-width: 767px) {
    background: right 15% bottom / 300% no-repeat url(${bgHills}),
      center / cover no-repeat url(${bgStars});
  }
`;

const Container = styled.div`
  height: 100%;
  padding: 132px 24px 72px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 102px;

  @media (max-width: 767px) {
    padding: 142px 24px 48px 24px;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 22px;
  letter-spacing: 7.5px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 18px;
    letter-spacing: 6px;
  }
`;

export { Background, Container, Title };
