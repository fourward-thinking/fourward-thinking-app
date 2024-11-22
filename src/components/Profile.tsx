/* eslint-disable @next/next/no-img-element */

'use client';

import { Col, Container, Row } from 'react-bootstrap';

// Define the TypeScript type for user data
interface User {
  name: string;
  major: string;
  email: string;
  interests: string;
  aboutme: string;
  avatarUrl: string;
  availability: string;
}

// Placeholder data for a user profile (this could come from an API)
const userData: User = {
  name: 'John Doe',
  major: 'Computer Science',
  email: 'johndoe@example.com',
  interests: 'Programming',
  aboutme: 'A passionate developer with a love for TypeScript and React.',
  // eslint-disable-next-line max-len
  avatarUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  availability: '',
};

const Profile = () => (
  <Container id="profile" fluid className="py-3">
    <Row>
      <Col xs={5} className="d-flex justify-content-center">
        <div className="profile-avatar-container">
          <img
            className="profile-avatar"
            src={userData.avatarUrl}
            alt={`${userData.name}'s avatar`}
          />
          <h1 className="profile-name">{userData.name}</h1>
          <p>
            Lvl.
          </p>
        </div>
        <div className="profile-body">
          <div className="profile-contact">
            <p>
              Major:
              {' '}
              {userData.major}
            </p>
            <p>
              Email:
              <a href={`mailto:${userData.email}`}>{userData.email}</a>
            </p>
            <p>
              Interests:
              {userData.interests}
            </p>
          </div>
        </div>
      </Col>
      {/* Right Column: Availability Section */}
      <Col xs={12} md={6} className="d-flex justify-content-center">
        <div className="profile-right">
          <h3>Availability</h3>
          <p>{userData.availability}</p>
        </div>
      </Col>
    </Row>
    {/* About Me Section */}
    <Row>
      <Col xs={5} className="d-flex justify-content-center">
        <div className="profile-aboutme text-center">
          <h3>About me:</h3>
          <p>{userData.aboutme}</p>
        </div>
      </Col>
      {/* Right Column: Availability Section */}
      <Col xs={12} md={6} className="d-flex justify-content-center">
        <div className="profile-right">
          <h3>Completed Badges</h3>
          <p>{userData.availability}</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Profile;
