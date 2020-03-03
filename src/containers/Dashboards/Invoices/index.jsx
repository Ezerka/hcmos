import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MUIDataTable from 'mui-datatables';
import Moment from 'react-moment';
import { history } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../shared/components/Loading';
import { getInvoices } from './invoicesThunk';
import { get } from 'lodash';

const beautifyInvoice = invoice => {
  return [
    handleUndefined(invoice.createdAt, '-'),
    handleUndefined(invoice.id, '-'),
    handleUndefined(get(invoice, 'customer.name'), '-'),
    handleUndefined(invoice.status, '-'),
    handleUndefined(invoice.dueDate, '-'),
    handleUndefined(invoice.totalAmount, '-'),
    handleUndefined(invoice.balanceDue, '-')
  ];
};

const handleUndefined = (data, character) => {
  if (character) {
    return data || character;
  }
  return data || '';
};

const Invoices = () => {
  const { state, invoicesData, error } = useSelector(state => state.invoices);
  const { uid } = useSelector(state => state.user);
  const handleRowClick = async (rowData, rowMeta) => {
    console.log(invoicesData[rowMeta.dataIndex]);
    history.push(`/invoices/${invoicesData[rowMeta.dataIndex].objectId}`);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices(uid));
  }, [dispatch]);

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
