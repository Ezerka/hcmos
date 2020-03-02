import React, { Component, useRef } from 'react';
import {
  ButtonToolbar,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table
} from 'reactstrap';
import { Grid } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Invoice from './components/Invoice';
import ReactToPrint from 'react-to-print';
import { history } from '../../../redux/store';
import { Redirect, Route } from 'react-router-dom';
import InvoicePaymentDetail from '../InvoicePayment';

const InvoiceDetail = props => {
  const createCustomer = async () => {
    const customer = {
      description: 'Ashfaq Nisar',
      email: 'ashfaqnisar00@gmail.com',
      currency: 'INR',
      name: 'Ashfaq',
      phone: 8328277518
    };
    const response = await axios({
      method: 'post',
      url: 'https://5bxin.sse.codesandbox.io/customers',
      data: customer
    });
    console.log(response.data);
  };

  const { invoiceId } = props.match.params;

  const product = {
    name: 'name',
    price: 579,
    description: 'description'
  };
  const makePayment = () => {};
  const componentRef = useRef();
  const handleToken = async (token, address) => {
    console.log(token);
    const response = await axios({
      method: 'post',
      url: 'https://5bxin.sse.codesandbox.io/checkout',
      data: { token, product }
    });
    const { status } = response.data;
    if (status === 'success') {
      console.log('Hurray, success');
    } else {
      console.log('DOnt know what is wrong ');
    }
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12} className={'mb-4'}>
          <h3 className="page-title">Invoice Detail Page</h3>
          <h5>{invoiceId}</h5>
          {/*<StripeCheckout*/}
          {/*  token={handleToken}*/}
          {/*  stripeKey={'pk_test_ED53qZ8D0iwhQ9cXQ6JBxb68000aUl34vY'}*/}
          {/*  currency={'INR'}*/}
          {/*  amount={50000}*/}
          {/*  billingAddress*/}
          {/*  shippingAddress*/}
          {/*/>*/}
          {/*<Button onClick={makePayment}>Pay Now</Button>*/}
          {/*<Button onClick={createCustomer}>Create Customer</Button>*/}
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <Invoice ref={componentRef} />
        </Col>
      </Row>
      <ButtonToolbar className="invoice__toolbar">
        <ReactToPrint
          trigger={() => (
            <Button color={'primary'} variant={'contained'}>
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Button
          color={'success'}
          variant={'contained'}
          onClick={() => history.push(`/invoices/${invoiceId}/payment`)}
        >
          Proceed to payment
        </Button>
      </ButtonToolbar>
    </Container>
  );
};

export default InvoiceDetail;
