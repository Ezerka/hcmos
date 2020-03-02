import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MUIDataTable from 'mui-datatables';
import invoicesData from '../../../data/invoicesData';
import Moment from 'react-moment';
import axios from 'axios';

const beautifyInvoice = invoice => {
  return [
    handleUndefined(invoice.createdAt),
    handleUndefined(invoice.id),
    handleUndefined(invoice.customer ? invoice.customer.name : ''),
    handleUndefined(invoice.status),
    handleUndefined(invoice.dueDate),
    handleUndefined(invoice.totalAmount),
    handleUndefined(invoice.balanceDue)
  ];
};

const handleUndefined = (data, character) => {
  if (character) {
    return data || character;
  }
  return data || '';
};

class Invoices extends Component {
  render() {
    const handleRowClick = (rowData, rowMeta) => {
      console.log(rowData);
    };
    const tableOptions = {
      filterType: 'dropdown',
      selectableRows: 'none',
      rowsPerPage: 15,
      print: false,
      rowsPerPageOptions: [15, 20, 30],
      download: false,
      viewColumns: false,
      onRowClick: handleRowClick,
      responsive: 'scrollFullHeight'
    };

    const columns = [
      {
        name: 'createdAt',
        label: 'Date',
        options: {
          filter: false,
          customBodyRender: value => {
            return <Moment format={'DD/MM/YYYY'}>{value}</Moment>;
          }
        }
      },
      'Invoice',
      'Customer Name',
      'Status',
      {
        name: 'dueDate',
        label: 'Due Date',
        options: {
          filter: false,
          customBodyRender: value => {
            return <Moment format={'DD/MM/YYYY'}>{value}</Moment>;
          }
        }
      },
      'Amount',
      'Balance Due'
    ];
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Invoices</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <MUIDataTable
                options={tableOptions}
                columns={columns}
                data={invoicesData.map(invoice => {
                  return beautifyInvoice(invoice);
                })}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Invoices;
