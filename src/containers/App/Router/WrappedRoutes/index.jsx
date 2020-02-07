import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../../Layout/index';

import HomeDashboard from '../../../Dashboards/Home/index';
import FeeDashboard from '../../../Dashboards/Fee';
import LibraryDashboard from '../../../Dashboards/Library';
import HallTicketGeneration from '../../../Dashboards/Examination/HallTicketGeneration';
import ExamSeating from '../../../Dashboards/Examination/ExamSeatArrangement';
import ProfessorsDashboard from '../../../Dashboards/Professors';
import ClassroomDashboard from '../../../Dashboards/Classroom';
import AttendanceDashboard from '../../../Dashboards/Attendance';
import ResultsDashboard from '../../../Dashboards/Results';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
        <Route path="/home" component={HomeDashboard} />
        <Route path={'/fee'} component={FeeDashboard} />
        <Route path={'/library'} component={LibraryDashboard} />
        <Route path={'/professors'} component={ProfessorsDashboard} />
        <Route
          path={'/examination/hallticket'}
          component={HallTicketGeneration}
        />
        <Route path={'/examination/seating'} component={ExamSeating} />
        <Route path={'/attendance'} component={AttendanceDashboard} />
        <Route path={'/results'} component={ResultsDashboard} />
        <Route path={'/classroom'} component={ClassroomDashboard} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  </div>
);
