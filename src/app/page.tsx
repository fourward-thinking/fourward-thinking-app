import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container fluid className="landing-page text-center">
      {/* Banner */}
      <Row className="text-center py-5" style={{ backgroundColor: "#356943", color: "white" }}>
        <Col>
          <h1 className="display-4 fw-bold">Fourward Thinking</h1>
          <h6>Study Sessions at UHM</h6>
        </Col>
      </Row>
      {/* Sign-in Section */}
      <Row className="text-center py-4" style={({ backgroundColor: "#fff8f0"})}>
        <Col>
          <p className="fw-bold">Start by Signing in...</p>
        </Col>
      </Row>
      { /* Example Windows */}
      <Row className="example-windows-section" style={{ height: '45vh' }}>
        <Col xs={6} className="d-flex justify-content-center">
          <div className="example-window">
            <h6>Example Window 1</h6>
          </div>
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          <div className="example-window">
            <h6>Example Window 2</h6>
          </div>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
