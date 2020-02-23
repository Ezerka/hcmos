import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ExamsTable, NewExamForm } from './components';

const PendingIssues = () => {
  const [isFormOpen, setFormDialog] = useState(false);
  const toggleNewExamForm = () => {
    setFormDialog(!isFormOpen);
  };
  return (
    <div>
      <Container className="dashboard">
        <Row style={{ paddingBottom: '15px' }}>
          <Col sm={6} md={8} lg={10} xl={10}>
            <h3 className="page-title">Pending Issues</h3>
            <h3 className="page-subhead subhead">
              Here, we have all the pending issues for the system
            </h3>
          </Col>
          <Col sm={6} md={4} lg={2} xl={2}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
              onClick={toggleNewExamForm}
            >
              New Exam
            </Button>
          </Col>
        </Row>
        <Row>
          <ExamsTable />
        </Row>
      </Container>
      <NewExamForm open={isFormOpen} toggleDialog={toggleNewExamForm} />
    </div>
  );
};

export default PendingIssues;
