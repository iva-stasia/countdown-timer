import { Background, Container, Title } from "./App.styled";
import CountdownComponent from "./components/countdown/CountdownComponent";
import SocialComponent from "./components/social/SocialComponent";

function App() {
  return (
    <Background>
      <Container>
        <Title>Countdown to the New Year</Title>
        <CountdownComponent />
        <SocialComponent />
      </Container>
    </Background>
  );
}

export default App;
