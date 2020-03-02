import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { Button, Grid } from '@material-ui/core';

const invoiceData = [
  { title: 'Item 1', hoursStayed: 1, costPerHour: 27 },
  { title: 'Item 2', hoursStayed: 1, costPerHour: 59 },
  { title: 'Item 3', hoursStayed: 2, costPerHour: 20 }
];

class Invoice extends React.Component {
  render() {
    return (
      <Card>
        <CardBody className="invoice">
          <div className="invoice__head">
            <div className="invoice__head-left">
              <h3>Invoice #2308</h3>
              <p className="invoice__date">August 23, 2016</p>
              <p>Vinay Reddy</p>
              <p>Captain Of Titanic</p>
              <p>Vinay.reddy@ezerka.in</p>
              <p>Vanasthalipuram</p>
              <p>Hyderabad, IN 500006</p>
            </div>
            <div className="invoice__head-right">
              <Grid container justify={'flex-end'}>
                <div className="invoice__logo" />
              </Grid>
              <p>Adani Ports & Special Economic Zone Ltd.</p>
              <p>Mithakhali Six Roads, Navarangpura</p>
              <p>Ahmedabad, Gujarat</p>
              <p>IN 380 009</p>
              <p dir="ltr">+91 79 2656 5555</p>
            </div>
          </div>
          <Table className="table--bordered" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Berth</th>
                <th>Cost Per Hour</th>
                <th>Hours Stayed</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((i, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.title}</td>
                  <td>₹{i.costPerHour}</td>
                  <td>{i.hoursStayed}</td>
                  <td>₹{i.costPerHour * i.hoursStayed}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="invoice__total">
            <p>Sub - Total amount: ₹126.00</p>
            <p>VAT: ₹20.00</p>
            <p className="invoice__grand-total">Grand Total: ₹146.00</p>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Invoice;
