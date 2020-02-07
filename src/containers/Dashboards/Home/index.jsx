import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';

class HomeDashboard extends Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Home Page</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeDashboard;
