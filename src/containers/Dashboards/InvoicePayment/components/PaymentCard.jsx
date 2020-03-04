import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PaymentForm from './PaymentForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

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
              <StripeProvider
                apiKey={'pk_test_ED53qZ8D0iwhQ9cXQ6JBxb68000aUl34vY'}
              >
                <Elements>
                  <PaymentForm />
                </Elements>
              </StripeProvider>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default PaymentCard;
