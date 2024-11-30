import { useState, useEffect } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

interface SessionDetailsProps {
  sessionId: number;
}

const SessionDetails: React.FC<SessionDetailsProps> = ({ sessionId }) => {
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      try {
        const response = await fetch(`/api/sessions/${sessionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch session details');
        }
        const data = await response.json();
        setSession(data);
      } catch (err: unknown) {
        // Type the error as an instance of `Error`
        if (err instanceof Error) {
          setError(err.message); // now TypeScript knows `err` is an `Error`
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchSessionDetails();
  }, [sessionId]);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!session) {
    return <div>Loading...</div>;
  }

  const { sessionName, date, time, applicableClass, sessionHost, participants } = session;
  const tookClass = participants.filter((p: any) => p.participantType === 'TOOK');
  const takingClass = participants.filter((p: any) => p.participantType === 'TAKING');

  return (
    <Row className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      <Col xs={12} md={12}>
        <Container id="session-details">
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <h1>Session Details</h1>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <p>Name:</p>
                  <p>Date:</p>
                  <p>Time:</p>
                  <p>Applicable Class:</p>
                  <Button variant="primary" className="mt-3">Interested</Button>
                </Col>
                <Col xs={12} md={4}>
                  <p>{sessionName}</p>
                  <p>{new Date(date).toLocaleDateString()}</p>
                  <p>{new Date(time).toLocaleTimeString()}</p>
                  <p>{applicableClass}</p>
                </Col>
                <Col xs={12} md={4} className="text-center">
                  <p>Host:</p>
                  <Image src={sessionHost.imageUrl || 'defaultHostImage.jpg'} width="100px" alt="Session Host" />
                  <p>{sessionHost.name}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <h1>Participants</h1>
              <Row>
                <Col xs={12} md={6}>
                  <h6>Taken the class:</h6>
                  <ul id="taking-class-list" className="participant-list">
                    {tookClass.map((participant: any) => (
                      <li key={participant.id}><p>{participant.user.name}</p></li>
                    ))}
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <h6>Taking the class:</h6>
                  <ul id="taken-class-list" className="participant-list">
                    {takingClass.map((participant: any) => (
                      <li key={participant.id}><p>{participant.user.name}</p></li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default SessionDetails;
