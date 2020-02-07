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
            title={'Fee'}
            icon={'cart'}
            route={'/fee'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title={'Professors'}
            icon={'user'}
            route={'/professors'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title={'Library'}
            icon={'book'}
            route={'/library'}
            onClick={this.hideSidebar}
          />

          <SidebarCategory title="Examination" icon="layers">
            <SidebarLink
              title={'Hall Ticket Generation'}
              route={'/examination/hallticket'}
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title={'Seat Arrangement'}
              route={'/examination/seating'}
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          <SidebarLink
            icon={'license'}
            title={'Attendance'}
            route={'/attendance'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            icon={'graduation-hat'}
            title={'Results'}
            route={'/results'}
            onClick={this.hideSidebar}
          />
          <SidebarLink
            icon={'store'}
            title={'Classroom'}
            route={'/classroom'}
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
