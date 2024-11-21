'use client';

import { Col, Row, Container } from 'react-bootstrap';

const courses = {
  100: [ // 100-level courses
    'ICS 101', 'ICS 101A', 'ICS 102', 'ICS 103', 'ICS 110',
    'ICS 111', 'ICS 111A', 'ICS 141'],
  200: [ // 200-level courses
    'ICS 210', 'ICS 211', 'ICS 211A', 'ICS 212', 'ICS 215',
    'ICS 222', 'ICS 235', 'ICS 241', 'ICS 290', 'ICS 296',
  ],
  300: [ // 300-level courses
    'ICS 311', 'ICS 312', 'ICS 313', 'ICS 314', 'ICS 321',
    'ICS 331', 'ICS 332', 'ICS 351', 'ICS 355', 'ICS 361',
    'ICS 369', 'ICS 390', 'ICS 396',
  ],
  400: [ // 400-level courses
    'ICS 414', 'ICS 415', 'ICS 419', 'ICS 421', 'ICS 422',
    'ICS 423', 'ICS 424', 'ICS 425', 'ICS 426', 'ICS 427',
    'ICS 428', 'ICS 431', 'ICS 432', 'ICS 434', 'ICS 435',
    'ICS 438', 'ICS 441', 'ICS 442', 'ICS 443', 'ICS 451',
    'ICS 452', 'ICS 455', 'ICS 461', 'ICS 462', 'ICS 464',
    'ICS 465', 'ICS 466', 'ICS 469', 'ICS 471', 'ICS 475',
    'ICS 476', 'ICS 481', 'ICS 482', 'ICS 483', 'ICS 484',
    'ICS 485', 'ICS 486', 'ICS 487', 'ICS 488', 'ICS 489',
    'ICS 491', 'ICS 495', 'ICS 496', 'ICS 499'],
  600: [ // 600-level courses
    'ICS 505', 'ICS 611', 'ICS 612', 'ICS 613', 'ICS 614',
    'ICS 615', 'ICS 616', 'ICS 621', 'ICS 622', 'ICS 623',
    'ICS 624', 'ICS 632', 'ICS 635', 'ICS 636', 'ICS 637',
    'ICS 639', 'ICS 641', 'ICS 643', 'ICS 651', 'ICS 655',
    'ICS 660', 'ICS 661', 'ICS 663', 'ICS 664', 'ICS 665',
    'ICS 667', 'ICS 668', 'ICS 669', 'ICS 674', 'ICS 675',
    'ICS 676', 'ICS 681', 'ICS 682', 'ICS 683', 'ICS 684',
    'ICS 685', 'ICS 686', 'ICS 690', 'ICS 691', 'ICS 692',
    'ICS 695', 'ICS 699',
  ],
  700: [ // 700-level courses
    'ICS 700',
  ],
  800: [ // 800-level courses
    'ICS 800',
  ],
};

const Courses = () => (
  <Container fluid className="beige-background">
    <Row>
      <Col className="text-center calendar-nav">
        <h1 className="calendar-title">Courses</h1>
      </Col>
    </Row>
    {Object.entries(courses).map(([level, courseList], index) => (
      <div key={level} className="courses-level-container">
        <Row className={`courses-level-${level} courses-spacing`}>
          <Col xs={12}>
            <h2 className="level-header">
              {level}
              {' '}
              Level Courses
            </h2>
          </Col>
          <div className="courses-row">
            {courseList.map((course) => (
              <div key={course} className="courses-box">
                <button
                  type="button"
                  className="course-button"
                  onClick={() => console.log(`Clicked on ${course}`)}
                >
                  {course}
                </button>
              </div>
            ))}
          </div>
        </Row>
        {/* Add dark green line after each row, except the last one */}
        {index < Object.entries(courses).length - 1 && (
          <hr className="row-divider" />
        )}
      </div>
    ))}
  </Container>
);

export default Courses;
