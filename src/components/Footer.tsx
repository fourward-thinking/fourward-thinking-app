import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3" id="footer">
    <Container>
      <Col className="text-center">
        The Fourward Thinking Project
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        <br />
        <a href="https://fourward-thinking.github.io/">https://fourward-thinking.github.io/</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
