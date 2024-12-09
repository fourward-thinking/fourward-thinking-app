import { useState } from 'react';
import { Col, Container, Row, Button, Form, Alert } from 'react-bootstrap';

type FormData = {
  sessionName: string;
  sessionDate: string;
  sessionTime: string;
  classApplicable: string;
};

const CreateSession = () => {
  const [formData, setFormData] = useState<FormData>({
    sessionName: '',
    sessionDate: '',
    sessionTime: '',
    classApplicable: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading state to true and clear previous messages
    setIsLoading(true);
    setMessage(null);

    try {
      // Ensure sessionDate is formatted correctly as ISO 8601 (date + time)
      const combinedDateTime = new Date(
        `${formData.sessionDate}T${formData.sessionTime}:00`,
      ).toISOString(); // Convert to ISO string format for DateTime

      const sessionHostId = 1; // Replace with the actual user ID from authentication

      const response = await fetch('/api/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionName: formData.sessionName,
          sessionDate: combinedDateTime, // Send combined date and time
          sessionTime: formData.sessionTime, // Send time explicitly
          classApplicable: formData.classApplicable,
          sessionHostId, // Pass sessionHostId
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Session "${data.sessionName}" created successfully!`);

        // Optionally reset form after success
        setFormData({
          sessionName: '',
          sessionDate: '',
          sessionTime: '',
          classApplicable: '',
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Error creating session:', error);
      setMessage('Error: Failed to create session. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="sessionName">
                          <Form.Label>Session Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter session name"
                            name="sessionName"
                            value={formData.sessionName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="sessionDate">
                          <Form.Label>Date:</Form.Label>
                          <Form.Control
                            type="date"
                            name="sessionDate"
                            value={formData.sessionDate}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="sessionTime">
                          <Form.Label>Time:</Form.Label>
                          <Form.Control
                            type="time"
                            name="sessionTime"
                            value={formData.sessionTime}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="classApplicable">
                          <Form.Label>Applicable Class:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter class name"
                            name="classApplicable"
                            value={formData.classApplicable}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Display message (success/error) */}
                    {message && (
                      <Row className="mt-4">
                        <Col xs={12}>
                          <Alert variant={message.startsWith('Error') ? 'danger' : 'success'}>
                            {message}
                          </Alert>
                        </Col>
                      </Row>
                    )}

                    {/* Submit button */}
                    <Row className="d-flex justify-content-end mt-4">
                      <Col xs="auto">
                        <Button
                          variant="primary"
                          className="create-session-button"
                          id="preview-button"
                          disabled={isLoading}
                          type="submit"
                        >
                          {isLoading ? 'Creating...' : 'Create Session'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default CreateSession;
