import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
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
          <SidebarCategory title={'Invoices'} icon={'layers'}>
            <SidebarLink
              title={'Pending Invoices'}
              route={'/invoices/pending'}
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title={'Resolved Invoices'}
              route={'/invoices/resolved'}
              onClick={this.hideSidebar}
            />
          </SidebarCategory>

          <SidebarCategory title="Issues" icon="layers">
            <SidebarLink
              title={'Pending Issues'}
              route={'/issues/pending'}
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title={'Resolved Issues'}
              route={'/issues/resolved'}
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          <SidebarLink
            icon={'store'}
            title={'Wallet'}
            route={'/wallet'}
            onClick={this.hideSidebar}
          />
        </ul>

        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/login" />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
