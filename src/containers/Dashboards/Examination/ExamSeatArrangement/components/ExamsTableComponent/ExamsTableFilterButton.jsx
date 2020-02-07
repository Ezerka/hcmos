import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from 'mdi-react/FilterListIcon';

class ExamsTableFilterButton extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired
  };

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSort = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className="material-table__toolbar-button"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FilterListIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className="material-table__filter-menu"
        >
          <MenuItem
            onClick={this.handleSort('examType')}
            className="material-table__filter-menu-item"
          >
            Exam Type
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('midType')}
            className="material-table__filter-menu-item"
          >
            Mid Type
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('startDate')}
            className="material-table__filter-menu-item"
          >
            Start Date
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('endDate')}
            className="material-table__filter-menu-item"
          >
            End Date
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('semType')}
            className="material-table__filter-menu-item"
          >
            Sem Type
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('studentsYear')}
            className="material-table__filter-menu-item"
          >
            Students Year
          </MenuItem>
          <MenuItem
            onClick={this.handleSort('blocks')}
            className="material-table__filter-menu-item"
          >
            Blocks
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ExamsTableFilterButton;
