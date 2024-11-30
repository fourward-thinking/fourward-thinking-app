import { Col, Container, Row, Image, Button } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const SessionDetails = () => (
  <Row className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
    <Col xs={12} md={12}>
      <Container id="session-details">
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <h1>Session Details</h1>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Row>
                  <Col xs={12} md={4}>
                    <p>Name:</p>
                    <p>Date:</p>
                    <p>Time:</p>
                    <p>Applicable Class:</p>
                    <Button variant="primary" className="mt-3">Interested</Button>
                  </Col>
                  <Col xs={12} md={4}>
                    <p>Figuring out next.js</p>
                    <p>November 22, 2024</p>
                    <p>18:00 - 22:00</p>
                    <p>ICS 314</p>
                  </Col>
                  <Col xs={12} md={4} className="text-center">
                    <p>Host:</p>
                    <Image src="JaydenOntalanCapistrano.jpg" width="100px" alt="Session Host" />
                    <p>Jayden Ontalan Capistrano</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h1>Participants</h1>
            <Row>
              <Col xs={12} md={6}>
                <h6>Taken the class:</h6>
                <ul id="taking-class-list" className="participant-list">
                  <li><p>Jackson Young</p></li>
                  <li><p>Harper King</p></li>
                  <li><p>Grace Perez</p></li>
                  <li><p>Owen Hall</p></li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <h6>Taking the class:</h6>
                <ul id="taken-class-list" className="participant-list">
                  <li><p>Jayden Ontalan Capistrano</p></li>
                  <li><p>Ava Johnson</p></li>
                  <li><p>Liam Smith</p></li>
                  <li><p>Olivia Brown</p></li>
                  <li><p>Noah Wilson</p></li>
                  <li><p>Emma Davis</p></li>
                  <li><p>Ethan Clark</p></li>
                  <li><p>Charlotte Martinez</p></li>
                  <li><p>James Taylor</p></li>
                  <li><p>Sophia Anderson</p></li>
                  <li><p>Benjamin Thomas</p></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
);

export default SessionDetails;
