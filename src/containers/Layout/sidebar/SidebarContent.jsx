import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { signOut } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title={'Home'}
            icon={'home'}
            route={'/home'}
            onClick={this.hideSidebar}
          />

          <SidebarLink
            title={'Current Outstandings'}
            icon={'cart'}
            route={'/outstanding'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title={'Payment Dues'}
            icon={'user'}
            route={'/payment/dues'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title={'Payment History'}
            icon={'license'}
            route={'/payment/history'}
            onClick={this.hideSidebar}
          />

          <SidebarLink
            icon={'layers'}
            title={'Invoices'}
            route={'/invoices'}
            onClick={this.hideSidebar}
          />

          <SidebarLink
            title={'Issues'}
            icon={'layers'}
            route={'/issues'}
            onClick={this.hideSidebar}
          />

          <SidebarLink
            icon={'store'}
            title={'Wallet'}
            route={'/wallet'}
            onClick={this.hideSidebar}
          />
        </ul>

        <ul className="sidebar__block">
          <SidebarLink
            title={'Log Out'}
            route={'/login'}
            icon="exit"
            route="/login"
            onClick={signOut}
          />
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SidebarContent);
