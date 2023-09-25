import {
  faInstagram,
  faPinterest,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Link } from "./Social.styled";

const SocialComponent = () => {
  return (
    <Container>
      <Link href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faSquareFacebook} />
      </Link>
      <Link href="https://www.pinterest.com/" target="_blank">
        <FontAwesomeIcon icon={faPinterest} />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Container>
  );
};

export default SocialComponent;
