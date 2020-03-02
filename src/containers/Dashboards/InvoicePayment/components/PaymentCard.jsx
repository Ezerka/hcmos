import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PaymentForm from './PaymentForm';

const performPayment = values => {
  console.log(values);
};
const PaymentCard = () => {
  const [preferredPayment, setPreferredPayment] = useState('credit/debit');
  return (
    <>
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Payment</h5>
            </div>
            <div className="payment">
              <PaymentForm onSubmit={performPayment} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default PaymentCard;
