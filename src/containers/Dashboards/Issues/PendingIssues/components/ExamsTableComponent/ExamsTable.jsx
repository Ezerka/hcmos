import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MatTableHead from './ExamsTableHead';
import MatTableToolbar from './ExamsTableToolbar';
import axios from 'axios';

let counter = 0;

function createData(
  examType,
  midType,
  startDate,
  endDate,
  semType,
  studentsYear,
  blocks
) {
  counter += 1;
  return {
    id: counter,
    examType,
    midType,
    startDate,
    endDate,
    semType,
    studentsYear,
    blocks
  };
}

function getSorting(order, orderBy) {
  if (order === 'desc') {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[orderBy] > b[orderBy]) {
      return -1;
    }
    if (a[orderBy] < b[orderBy]) {
      return 1;
    }
    return 0;
  };
}

export default class ExamsTable extends PureComponent {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: new Map([]),
    data: [],
    page: 0,
    rowsPerPage: 5
  };
  componentDidMount() {
    const response = axios({
      method: 'get',
      url: 'https://college-erp-ezerka.firebaseapp.com/api/v1/exams'
    }).then(
      response => this.setState({ data: response.data }),
      error => console.log(error.message)
    );
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    const { orderBy: stateOrderBy, order: stateOrder } = this.state;

    if (stateOrderBy === property && stateOrder === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      const { data } = this.state;
      const newSelected = new Map();
      data.map(n => newSelected.set(n.id, true));
      this.setState({ selected: newSelected });
      return;
    }
    this.setState({ selected: new Map([]) });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const newSelected = new Map(selected);
    const value = newSelected.get(id);
    let isActive = true;
    if (value) {
      isActive = false;
    }
    newSelected.set(id, isActive);
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleDeleteSelected = () => {
    const { data } = this.state;
    let copyData = [...data];
    const { selected } = this.state;

    for (let i = 0; i < [...selected].filter(el => el[1]).length; i += 1) {
      copyData = copyData.filter(obj => obj.id !== selected[i]);
    }

    this.setState({ data: copyData, selected: new Map([]) });
  };

  isSelected = id => {
    const { selected } = this.state;
    return !!selected.get(id);
  };

  render() {
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Exams</h5>
            </div>
            <MatTableToolbar
              numSelected={[...selected].filter(el => el[1]).length}
              handleDeleteSelected={this.handleDeleteSelected}
              onRequestSort={this.handleRequestSort}
            />
            <div className="material-table__wrap">
              <Table className="material-table">
                <MatTableHead
                  numSelected={[...selected].filter(el => el[1]).length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody>
                  {data
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(d => {
                      const isSelected = this.isSelected(d.id);
                      return (
                        <TableRow
                          className="material-table__row"
                          role="checkbox"
                          onClick={event => this.handleClick(event, d.id)}
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={d.id}
                          selected={isSelected}
                        >
                          <TableCell
                            className="material-table__cell"
                            padding="checkbox"
                          >
                            <Checkbox
                              checked={isSelected}
                              className="material-table__checkbox"
                            />
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell-right"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {d.examType}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.midType}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.startDate}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.endDate}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.semType === 1
                              ? 'First Semester'
                              : 'Second Semester'}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.studentsYear}
                          </TableCell>
                          <TableCell className="material-table__cell material-table__cell-right">
                            {d.blocks}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }} />
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              className="material-table__pagination"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
              dir="ltr"
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true
              }}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
