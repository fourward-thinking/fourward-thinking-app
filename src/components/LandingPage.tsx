'use client';

import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const LandingPage = () => (
  <Container fluid className="landing-page text-center p-0">
    {/* Banner */}
    <Row className="banner">
      <Col>
        <h1 className="display-4 fw-bold">Fourward Thinking</h1>
        <h5>Find study sessions at UHM</h5>
      </Col>
    </Row>
    {/* Example Windows */}
    <Row className="example-windows-section">
      <Col xs={6} className="d-flex justify-content-center">
        <div className="image-window">
          <Image
            src="/placeholder-2.jpg"
            alt="Placeholder"
            fill
            className="image-fill"
          />
        </div>
      </Col>
      <Col xs={5} className="d-flex justify-content-center">
        <Row className="text-window">
          <h1 className="landing-large-font fw-bold">Study Better Together</h1>
          <h3 className="landing-small-font">
            Your ultimate hub for collaborative learning! Connect with fellow students, join or create study sessions,
            enhance your learning experience.
          </h3>
          <Button
            className="button-one"
            onClick={() => {
            }}
          >
            Find Sessions...
          </Button>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default LandingPage;
