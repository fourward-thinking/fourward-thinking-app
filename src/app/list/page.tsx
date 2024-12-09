import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import prisma from '@/lib/prisma';

/** Render a list of sessions for the logged-in user. */
const ListPage = async () => {
  // Fetch the session (renamed to userSession to avoid conflict with the 'session' variable)
  const userSession = await getServerSession(authOptions);

  // Protect the page using the 'loggedInProtectedPage' function
  loggedInProtectedPage(userSession);

  const userId = userSession?.user?.id;
  const userRandomKey = userSession?.user?.randomKey;

  if (!userId || !userRandomKey) {
    return <div>Redirecting...</div>;
  }

  console.log('User ID:', userId); // Log the userId to make sure it's correct

  // Fetch sessions for the logged-in user (sessionHostId is from session.user.id)
  // Fetch all sessions, not filtering by sessionHostId
  const sessions = await prisma.session.findMany({
    include: {
      participants: {
        include: {
          user: true, // Include user data (so you can access user.name)
        },
      },
    },
  });

  console.log('All fetched sessions:', sessions); // Log all fetched sessions

  console.log('Fetched sessions:', sessions); // Log the fetched sessions to check the result

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>Sessions</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Session Name</th>
                  <th>Date</th>
                  <th>Applicable Class</th>
                  <th>Participants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.id}>
                    <td>{session.sessionName}</td>
                    <td>{new Date(session.date).toLocaleDateString()}</td>
                    {/* Remove the reference to 'time' here */}
                    <td>{session.applicableClass}</td>
                    <td>
                      {session.participants.length > 0
                        ? session.participants.map(
                          (participant) => participant.user?.name || 'Unnamed Participant',
                        ).join(', ')
                        : 'No participants'}
                    </td>
                    <td>
                      <button type="button">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>

  );
};

export default ListPage;
