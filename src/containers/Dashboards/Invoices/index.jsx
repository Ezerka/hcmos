import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MUIDataTable from 'mui-datatables';
import Moment from 'react-moment';
import { history } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../shared/components/Loading';
import { getInvoices } from './invoicesThunk';
import { handleUndefined } from '../../../shared/components/Beautifier';
import { get } from 'lodash';

const beautifyInvoice = invoice => {
  return [
    handleUndefined(invoice.paymentData.created_at, '-'),
    handleUndefined(invoice.paymentData.invoice_number, '-'),
    handleUndefined(invoice.paymentData.status, '-'),
    handleUndefined(invoice.paymentData.expire_by, '-'),
    handleUndefined(invoice.paymentData.amount, '-'),
    handleUndefined(invoice.paymentData.amount_paid, '-'),
    handleUndefined(invoice.paymentData.amount_due)
  ];
};

const Invoices = () => {
  const { state, invoicesData, error } = useSelector(state => state.invoices);
  const { custId } = useSelector(state => state.user);
  const handleRowClick = async (rowData, rowMeta) => {
    console.log(invoicesData[rowMeta.dataIndex]);
    history.push(`/invoices/${invoicesData[rowMeta.dataIndex].objectId}`);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices(custId));
  }, []);

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
          return (
            <Moment format={'DD/MM/YYYY'} unix>
              {value}
            </Moment>
          );
        }
      }
    },
    'Invoice',
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p style={{ textTransform: 'capitalize' }}>{value}</p>;
        }
      }
    },
    {
      name: 'dueDate',
      label: 'Due Date',
      options: {
        filter: false,
        customBodyRender: value => {
          return (
            <Moment format={'DD/MM/YYYY'} unix>
              {value}
            </Moment>
          );
        }
      }
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        filter: false,
        customBodyRender: value => {
          return <>₹{value / 100}</>;
        }
      }
    },
    {
      name: 'amount_paid',
      label: 'Amount Paid',
      options: {
        filter: false,
        customBodyRender: value => {
          return <>₹{value / 100}</>;
        }
      }
    },
    {
      name: 'amount_due',
      label: 'Amount Due',
      options: {
        filter: false,
        customBodyRender: value => {
          return <>₹{value / 100}</>;
        }
      }
    }
  ];

  return (
    <Container className="dashboard">
      {['initial', 'loading'].includes(state) ? (
        <Loading loading={['initial', 'loading'].includes(state)} />
      ) : state === 'error' ? (
        <>Error: {error.message}</>
      ) : (
        <div>
          <Row>
            <Col md={12}>
              <MUIDataTable
                title={'Invoices'}
                options={tableOptions}
                columns={columns}
                data={invoicesData.map(invoice => {
                  return beautifyInvoice(invoice);
                })}
              />
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};
export default Invoices;
