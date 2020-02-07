import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class ClassroomDashboard extends Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Class Room Page</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClassroomDashboard;
