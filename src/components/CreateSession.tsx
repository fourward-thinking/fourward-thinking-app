'use client';

import { Col, Container, Row, Button, Form } from 'react-bootstrap';

/** The Create Session page allows users to input session details and create a session. */
const CreateSession = () => (
  <Row className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
    <Col xs={12} md={12}>
      <Container id="create-session">
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <h1>Create Session</h1>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="sessionName">
                        <Form.Label>Session Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter session name" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="sessionDate">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="sessionTime">
                        <Form.Label>Time:</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="classApplicable">
                        <Form.Label>Applicable Class:</Form.Label>
                        <Form.Control type="text" placeholder="Enter class name" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex justify-content-end mt-4">
          <Col xs="auto">
            <Button variant="primary" className="create-session-button" id="preview-button">Preview</Button>
            <Button variant="secondary" className="mr-2 create-session-button">Cancel</Button>
            <Button variant="success" className="create-session-button">Create</Button>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
);

export default CreateSession;
