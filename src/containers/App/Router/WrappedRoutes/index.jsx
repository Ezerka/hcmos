import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../../Layout/index';

import HomeDashboard from '../../../Dashboards/Home/index';
import OutstandingDashboard from '../../../Dashboards/Outstanding';
import ResolvedIssues from '../../../Dashboards/Issues/ResolvedIssues';
import PendingIssues from '../../../Dashboards/Issues/PendingIssues';
import PaymentDues from '../../../Dashboards/Payment/Dues';

import PaymentHistory from '../../../Dashboards/Payment/History';
import PendingInvoices from '../../../Dashboards/Invoices/PendingInvoices';
import ResolvedInvoices from '../../../Dashboards/Invoices/ResolvedInvoices';
import Wallet from '../../../Dashboards/Wallet';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
        <Route path="/home" component={HomeDashboard} />
        <Route path={'/outstanding'} component={OutstandingDashboard} />
        <Route path={'/payment/dues'} component={PaymentDues} />
        <Route path={'/payment/history'} component={PaymentHistory} />
        <Route path={'/invoices/pending'} component={PendingInvoices} />
        <Route path={'/invoices/resolved'} component={ResolvedInvoices} />
        <Route path={'/issues/resolved'} component={ResolvedIssues} />
        <Route path={'/issues/pending'} component={PendingIssues} />
        <Route path={'/wallet'} component={Wallet} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  </div>
);
