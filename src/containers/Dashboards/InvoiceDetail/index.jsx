import React, { Component } from 'react';
import {
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table
} from 'reactstrap';
import { Button } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class InvoiceDetail extends Component {
  createCustomer = async () => {
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

  render() {
    const { invoiceId } = this.props.match.params;

    const product = {
      name: 'name',
      price: 579,
      description: 'description'
    };
    const makePayment = () => {};
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
          <Col md={12}>
            <h3 className="page-title">Invoice Detail Page</h3>
            <h5>{invoiceId}</h5>
            <StripeCheckout
              token={handleToken}
              stripeKey={'pk_test_ED53qZ8D0iwhQ9cXQ6JBxb68000aUl34vY'}
              currency={'INR'}
              amount={50000}
              billingAddress
              shippingAddress
            />
            <Button onClick={makePayment}>Pay Now</Button>
            <Button onClick={this.createCustomer}>Create Customer</Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Card>
              <CardBody className="invoice">
                <div className="invoice__head">
                  <div className="invoice__head-left">
                    <div className="invoice__logo" />
                    <p>Aspirity Creative Web Studio </p>
                    <p>44 Shirley Ave.</p>
                    <p>West Chicago,</p>
                    <p>IL 60185 </p>
                    <p dir="ltr">+8 (224) 243-4543</p>
                  </div>
                  <div className="invoice__head-right">
                    <h4>Invoice #2308</h4>
                    <p className="invoice__date">August 23, 2016</p>
                    <p>Maria Morris</p>
                    <p>Project Manager at BLX</p>
                    <p>mariam@company.co</p>
                    <p>44 Shirley Ave.</p>
                    <p>West Chicago, IL 60185</p>
                  </div>
                </div>
                <Table className="table--bordered" responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Unit Cost</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((i, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{i.title}</td>
                        <td>{i.quantity}</td>
                        <td>${i.cost}</td>
                        <td>${i.quantity * i.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="invoice__total">
                  <p>Sub - Total amount: $126.00</p>
                  <p>VAT: $20.00</p>
                  <p className="invoice__grand-total">Grand Total: $146.00</p>
                  <ButtonToolbar className="invoice__toolbar">
                    <Button color="primary">Proceed to payment</Button>
                    <Button>Print</Button>
                  </ButtonToolbar>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InvoiceDetail;
