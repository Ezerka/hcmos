import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class Invoices extends Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Invoices</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Invoices;
